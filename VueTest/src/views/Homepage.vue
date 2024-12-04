<template>
<div class="homepage">
    <div class="header">
        <h1>Room</h1>
        <p>HK2T Hotel's 283 elegant rooms combine traditional decor and first-class amenities, with stunning <br/> views of the Saigon River or the bustling city.</p>
    </div>

        <!-- Loading -->
        <p v-if="isLoading">Loading...</p>
  
        <!-- Error -->
        <p v-else-if="error">{{ error }}</p>
  
      <!-- Hiển thị danh sách type rooms -->
    <div class="room-list">
            <div v-if="typeRooms.length > 0">
                <div class="room-row" v-for="(roomRow, index) in chunkedRooms" :key="index">
                <!-- Sử dụng TypeRoomCard cho từng phòng -->
                <TypeRoomCard v-for="room in roomRow" :key="room.id" :room="room" @room-selected="handleRoomSelection" />
                </div>
            </div>
            <p v-else>No type rooms available.</p>
    </div>
</div>
  </template>
  



<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { fetchTypeRooms } from '../api/typeRoom';
import TypeRoomCard from '@/components/TypeRoomCard.vue';
import { useToast } from 'primevue';

export default defineComponent({
  name: 'Homepage',
  components: {
    TypeRoomCard,
  },
  setup() {
    const typeRooms = ref<any[]>([]);
    const isLoading = ref(true);
    const error = ref<string | null>(null);

    const toast = useToast(); // Initialize Toast


    onMounted(async () => {
      try {
        const data = await fetchTypeRooms();
        if (data && Array.isArray(data.result)) {
          typeRooms.value = data.result;
        } else {
          typeRooms.value = [];
        }
      } catch (err) {
        console.error(err);
        error.value = 'Failed to load type rooms.';
      } finally {
        isLoading.value = false;
      }
    });

    const chunkedRooms = computed(() => {
      const result = [];
      for (let i = 0; i < typeRooms.value.length; i += 2) {
        result.push(typeRooms.value.slice(i, i + 2));
      }
      return result;
    });


    const handleRoomSelection = (roomTitle: string) => {
      console.log('Room selected:', roomTitle);
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: `You have selected ${roomTitle}`,
        life: 3000, // Toast sẽ hiển thị trong 3 giây
      });
    };


    return { typeRooms, isLoading, error, chunkedRooms, handleRoomSelection };
  },
});
</script>
  


<style scoped>
.header {
  text-align: center; /* Căn giữa nội dung */
  padding: 10px 0; /* Khoảng cách trên và dưới */
  border-bottom: 2px solid #33333341; /* Đường viền dưới */
}

.header h1 {
  margin: 0;
  font-size: 2rem; /* Tùy chỉnh kích thước chữ */
}

.header p {
  margin: 20px;
  font-size: 1rem; /* Tùy chỉnh kích thước chữ */
  color: #000000; /* Màu sắc cho dòng giới thiệu */
}
.room-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 10px;
}
.room-row {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}




</style>