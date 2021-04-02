<template>
  <v-container class="d-flex fill-height justify-center" fluid>
    <v-btn plain class="backBtn" to="/discovery">DISCOVERY</v-btn>
    <v-row>
      <v-col
        class="paddingBookText"
        lg="4"
        offset-lg="4"
        md="6"
        offset-md="3"
        sm="8"
        offset-sm="2"
      >
        <v-col cols="12">
          <div class="tBookTitle">Hoàng Tử Bé</div>
        </v-col>
        <v-col cols="12">
          <div class="tBook">
            Hoàng tử bé là một tiểu thuyết của nhà quý tộc, nhà văn và phi công
            người Pháp Antoine de Saint-Exupéry. Nó được Reynal & Hitchcock xuất
            bản lần đầu tiên bằng tiếng Anh và tiếng Pháp ở Mỹ vào tháng 4 năm
            1943, và sau đó ở Pháp sau khi nước Pháp được giải phóng vì các tác
            phẩm của Saint-Exupéry đã bị Chế độ Vichy cấm. Câu chuyện kể về một
            hoàng tử trẻ đến thăm các hành tinh khác nhau trong không gian, bao
            gồm cả Trái đất, và đề cập đến các chủ đề về sự cô đơn, tình bạn,
            tình yêu và sự mất mát. Mặc dù mang phong cách là một cuốn sách dành
            cho trẻ em, The Little Prince vẫn đưa ra những quan sát về cuộc sống
            và bản chất con người.<br /><br />
            Hoàng tử bé đã trở thành tác phẩm thành công nhất của Saint-Exupéry,
            bán được ước tính khoảng 140 triệu bản trên toàn thế giới, khiến nó
            trở thành một trong những cuốn sách bán chạy nhất và được dịch nhiều
            nhất từng được xuất bản. Nó đã được dịch sang 301 ngôn ngữ và phương
            ngữ. Hoàng tử bé đã được chuyển thể sang nhiều loại hình nghệ thuật
            và phương tiện truyền thông, bao gồm bản ghi âm, vở kịch trên đài
            phát thanh, sân khấu trực tiếp, phim, truyền hình, múa ba lê và
            opera.
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";

.tBookTitle {
  font-family: Rokkitt;
  font-weight: bold;
  @include font-size(60px);
}

.tBook {
  font-family: Montserrat;
  @include font-size(20px);
  @include rfs(30px, line-height);
  text-align: justify;
}

@media screen and (max-width: 599.98px) {
  .paddingBookText {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .tBook {
    padding-bottom: 10%;
  }
}
@media screen and (min-width: 599.98px) {
  .paddingBookText {
    padding-top: 75px;
    padding-bottom: 75px;
  }
  .tBook {
    padding-bottom: 10%;
  }
}
@media screen and (min-width: 959.98px) {
  .paddingBookText {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .tBook {
    padding-bottom: 0;
  }
}
@media screen and (min-width: 1263.95px) {
  .paddingBookText {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .tBook {
    padding-bottom: 0;
  }
}

.backBtn {
  position: absolute;
  top: 0%;
  right: 0%;
  font-family: Rokkitt;
  margin-top: 30px;
}
.backBtn > span {
  @include font-size(20px);
}
</style>
