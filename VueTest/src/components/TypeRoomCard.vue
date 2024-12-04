<template>
    <div class="type-room-card">
      <div class="carousel-container">
        <Carousel 
          :value="room.images" 
          :numVisible="1" 
          :numScroll="1" 
          circular 
          :showIndicators="false"
          :showNavigators="true"
        >
          <template #item="{ data }">
            <img :src="data" alt="Room Image" class="room-image" />
          </template>
        </Carousel>
    </div>
    <div class="room-info">
      <div class="room-details-left">
        <h3 class="room-title">{{ room.title }}</h3>
        <div class="room-info-text">
            <p>
            <span>Quantity adult: <strong>{{ room.adult_capacity }} customers</strong></span>
            <span>|</span>
            <span>Quantity kids: <strong>{{ room.kids_capacity }} customers</strong></span>
            <span>|</span> <br>
            <span>Size room: <strong>{{ room.size }} m²</strong></span> 
            </p>
        </div>
      </div>
      <div class="room-details-right">
        <p></p> 
        <p></p> 
        <a href="https://docs.google.com/document/d/1KTIacTmAYX7PbpzZQKQDdkwsEdt6AOqYiCWfv9BjOZA/edit?tab=t.0" class="view-details">Xem chi tiết ></a>
      </div>
    </div>
    <div class="select-button-container">
      <button 
      class="select-room-button"
      :class="{'clicked': isClicked}"
      @click="handleButtonClick"
      >
      SELECT TYPE ROOM</button>
    </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { PropType } from 'vue';
  import Carousel from 'primevue/carousel';
  
  export default defineComponent({
    name: 'TypeRoomCard',
    components: {
      Carousel,
    },
    props: {
      room: {
        type: Object as PropType<{
          id: number;
          title: string;
          size: number;
          adult_capacity: number;
          kids_capacity: number;
          images: string[];
        }>,
        required: true,
      },
    },
    setup(props, { emit }) {
    const isClicked = ref(false);

    const handleButtonClick = () => {
      if (!isClicked.value) {
        isClicked.value = true;
        emit('room-selected', props.room.title); // Phát sự kiện khi chọn phòng
      } else {
        isClicked.value = false;
      }
    };
      return {isClicked, handleButtonClick};
    },
  });
  </script>
  
<style scoped>
.type-room-card {
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #33333305;
  width: 900px;
  margin-left: 20px;
}

.carousel-container {
  height: 500px; /* Chiều cao cố định */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3333331a; /* Màu nền khi không có ảnh */
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 5;
  position: relative;
}

.room-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Hiển thị toàn bộ ảnh */
  border-bottom: 1px solid #ddd; /* Tách ảnh với thông tin */
}

.room-details-left {
  flex: 1;
  text-align: left;
}

.view-details {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  color: #3333333d;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.room-details-right {
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
} 

.room-info-text {
  font-size: 14px;
  color: #000000;
  line-height: 1.6;
}


.room-info-text span {
  margin-right: 10px; /* Khoảng cách giữa các thông tin */
}

.select-button-container {
  display: flex;
  justify-content: flex-end; /* Căn phải */
  padding: 0px 10px;
}

.select-room-button {
  margin-bottom: 5px;
  padding: 7px 10px;
  font-size: 12px;
  background-color: #000000c4;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.select-room-button.clicked {
  background-color: #8a2be2;
}

.room-info {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
}

.room-title {
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}

.divider {
  width: 50px;
  height: 3px;
  background-color: #1abc9c;
  margin: 0 auto 15px;
}

.room-details {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.room-details p {
  margin: 5px 0;
}

.room-details span {
  font-weight: bold;
  color: #444;
}
</style>

  