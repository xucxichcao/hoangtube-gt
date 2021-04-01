<template>
  <v-container class="d-flex fill-height justify-center" fluid>
    <v-row class="paddingBookText">
      <v-col cols="12">
        <div class="text-lg-h2 text-md-h2 text-sm-h4 text-h4 tBookTitle">
          Hoàng Tử Bé
        </div>
      </v-col>
      <v-col cols="12">
        <div class="tBook">
          Hoàng tử bé là một tiểu thuyết của nhà quý tộc, nhà văn và phi công
          người Pháp Antoine de Saint-Exupéry. Nó được Reynal & Hitchcock xuất
          bản lần đầu tiên bằng tiếng Anh và tiếng Pháp ở Mỹ vào tháng 4 năm
          1943, và sau đó ở Pháp sau khi nước Pháp được giải phóng vì các tác
          phẩm của Saint-Exupéry đã bị Chế độ Vichy cấm. Câu chuyện kể về một
          hoàng tử trẻ đến thăm các hành tinh khác nhau trong không gian, bao
          gồm cả Trái đất, và đề cập đến các chủ đề về sự cô đơn, tình bạn, tình
          yêu và sự mất mát. Mặc dù mang phong cách là một cuốn sách dành cho
          trẻ em, The Little Prince vẫn đưa ra những quan sát về cuộc sống và
          bản chất con người.<br /><br />
          Hoàng tử bé đã trở thành tác phẩm thành công nhất của Saint-Exupéry,
          bán được ước tính khoảng 140 triệu bản trên toàn thế giới, khiến nó
          trở thành một trong những cuốn sách bán chạy nhất và được dịch nhiều
          nhất từng được xuất bản. Nó đã được dịch sang 301 ngôn ngữ và phương
          ngữ. Hoàng tử bé đã được chuyển thể sang nhiều loại hình nghệ thuật và
          phương tiện truyền thông, bao gồm bản ghi âm, vở kịch trên đài phát
          thanh, sân khấu trực tiếp, phim, truyền hình, múa ba lê và opera.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";


.tBookTitle {
  font-family: Rokkitt;
  font-weight: bold;
}

.tBook {
  font-family: Montserrat;
  @include font-size(20px);
}

@media screen and (max-width: 599.98px) {
.paddingBookText{
   padding: 50px 10px 0px 10px; 
}
.tBook{
    line-height: 30px;
}
}
@media screen and (min-width: 599.98px) {
.paddingBookText{
    padding: 75px 25px 0px 25px;
}
.tBook{
    line-height: 35px;
}    
}
@media screen and (min-width: 959.98px) {
.paddingBookText{
    padding: 100px;
}
.tBook{
    line-height: 40px;
}
}
@media screen and (min-width: 1263.95px) {
.paddingBookText{
    padding: 100px 20%;
}
.tBook{
    line-height: 50px;
}
}
</style>
