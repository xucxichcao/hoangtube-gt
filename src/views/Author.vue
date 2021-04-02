<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <v-row class="fill-height">
      <v-col
        class="d-flex align-center pa-0"
        cols="12"
        sm="12"
        md="3"
        lg="4"
        xl="4"
      >
        <img
          class="cover"
          src="../assets/images/Antoine-de-Saint-Exupery.png"
        />
      </v-col>
      <v-col
        class="ma-auto d-flex justify-center"
        cols="12"
        sm="12"
        md="9"
        lg="8"
        xl="8"
      >
        <v-container class="fill-content paddingText">
          <v-row class="mb-10">
            <div class="tAuthorName">Antoine de Saint Exupéry</div>
          </v-row>
          <v-row>
            <div class="tAuthorDes">
              Nhà văn sinh tại Lyon, Pháp. Chiến tranh Thế giới lần thứ nhất ông
              theo mẹ sang Thụy Sĩ. Năm 1917, trở về Pháp, học trung học tại
              Paris, sau đó ông vào trường Mỹ thuật. Trong chiến tranh Thế giới
              lần thứ hai, ông tham gia không quân. Ngày 31.7.1944, máy bay của
              ông mất tích trên bầu trời Địa Trung Hải. <br /><br />
              Những tác phẩm chính của Antoine de Saint Exupéry: Người phi công
              (Aviateur, 1926), Chuyến thư miền Nam (Courrier Sud, 1929), Bay
              đêm (Vol de nuit, 1931), Quê xứ con người (Terry des Hommes,
              1939), Phi công thời chiến (Pilote de Guerre, 1942), Thư gửi một
              con tin (Lettre à un Otage, 1943), Hoàng tử bé (Le Petit Prince,
              1943) và Cung thành (Citadel le, viết năm 1936, xuất bản sau khi
              ông mất, 1948). <br /><br />
              Hoàng tử bé ngắn mà mãnh liệt... biểu hiện nỗi đau của nhà văn và
              tư tưởng triết học của ông về ý nghĩa của sự có mặt ở trên đời,
              nỗi khát khao không thể nào vơi được về lòng nhân ái, về sự cảm
              thông giữa những con người...
            </div>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";
.fill-content {
  width: fit-content;
}

.cover {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.paddingText {
  padding: 5% 20% 15% 20%;
}

.tAuthorName {
  @include font-size(80px);
  font-family: Rokkitt;
  font-weight: 600;
  color: #333333;
  line-height: 70px;
}

.tAuthorDes {
  @include font-size(18px);
  @include rfs(30px, line-height);
  font-family: Montserrat;
  color: #606060;
}
</style>
