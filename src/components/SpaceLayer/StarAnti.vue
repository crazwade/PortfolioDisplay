<script setup lang='ts'>
</script>

<template>
  <div id="star1" />
  <div id="star2" />
</template>

<style lang="scss" scoped>
#star1 {
  z-index: -1;
  width: 2px;
  height: 2px;
  background-color: transparent;
  animation: star_anti 50s linear infinite;
  border-radius: 50%;
  box-shadow: 1804px 1265px #FFF , 365px 332px #FFF , 86px 1888px #FFF , 1888px 484px #FFF
, 199px 1489px #FFF , 1459px 1010px #FFF , 807px 388px #FFF , 855px 558px #FFF , 83px 1095px #FFF
, 1418px 377px #FFF , 677px 886px #FFF , 862px 1709px #FFF , 1058px 1085px #FFF , 50px 1772px #FFF
, 1941px 1544px #FFF , 377px 900px #FFF , 184px 712px #FFF , 1797px 1928px #FFF , 507px 1861px #FFF
, 199px 1489px #FFF , 1459px 1010px #FFF , 807px 388px #FFF , 855px 558px #FFF , 83px 1095px #FFF
, 1418px 377px #FFF , 677px 886px #FFF , 862px 1709px #FFF , 1058px 1085px #FFF , 50px 1772px #FFF
, 1941px 1544px #FFF , 377px 900px #FFF , 184px 712px #FFF , 1797px 1928px #FFF , 507px 1861px #FFF
, 199px 1489px #FFF , 1459px 1010px #FFF , 807px 388px #FFF , 855px 558px #FFF , 83px 1095px #FFF
, 1418px 377px #FFF , 677px 886px #FFF , 862px 1709px #FFF , 1058px 1085px #FFF , 50px 1772px #FFF
, 1941px 1544px #FFF , 377px 900px #FFF , 184px 712px #FFF , 1797px 1928px #FFF , 507px 1861px #FFF
, 199px 1489px #FFF , 1459px 1010px #FFF , 807px 388px #FFF , 855px 558px #FFF , 83px 1095px #FFF
, 1418px 377px #FFF , 677px 886px #FFF , 862px 1709px #FFF , 1058px 1085px #FFF , 50px 1772px #FFF
, 1941px 1544px #FFF , 377px 900px #FFF , 184px 712px #FFF , 1797px 1928px #FFF , 507px 1861px #FFF
, 144px 966px #FFF , 872px 943px #FFF , 1705px 1909px #FFF , 1318px 1173px #FFF , 1856px 1549px #FFF
, 1722px 1482px #FFF , 196px 594px #FFF , 355px 1182px #FFF , 1242px 112px #FFF , 226px 344px #FFF
, 1249px 1040px #FFF , 253px 484px #FFF , 1163px 775px #FFF , 426px 162px #FFF , 721px 1761px #FFF
, 369px 510px #FFF , 702px 1599px #FFF , 1883px 483px #FFF , 680px 1604px #FFF , 870px 1599px #FFF
, 976px 1808px #FFF , 916px 477px #FFF , 1223px 1636px #FFF , 506px 993px #FFF
}

#star2 {
  z-index: -1;
  width: 2px;
  height: 2px;
  background-color: transparent;
  animation: star_anti 100s linear infinite;
  border-radius: 50%;
  box-shadow: 1404px 125px #FFF , 365px 32px #FFF , 86px 188px #FFF , 188px 484px #FFF
, 199px 1489px #FFF , 159px 100px #FFF , 807px 38px #FFF , 855px 5158px #FFF , 83px 1095px #FFF
, 118px 377px #FFF , 677px 88px #FFF , 862px 10px #FFF , 158px 10815px #FFF , 50px 172px #FFF
, 1941px 1544px #FFF , 377px 90px #FFF , 184px 72px #FFF , 177px 1928px #FFF , 507px 1861px #FFF
, 199px 1489px #FFF , 1459px 100px #FFF , 807px 38px #FFF , 855px 5518px #FFF , 83px 195px #FFF
, 118px 377px #FFF , 677px 86px #FFF , 862px 179px #FFF , 108px 105px #FFF , 50px 1772px #FFF
, 141px 1544px #FFF , 377px 90px #FFF , 14px 72px #FFF , 1797px 198px #FFF , 507px 1861px #FFF
, 199px 1489px #FFF , 149px 100px #FFF , 807px 38px #FFF , 855px 58px #FFF , 83px 1095px #FFF
, 118px 377px #FFF , 67px 886px #FFF , 862px 179px #FFF , 1058px 185px #FFF , 50px 1772px #FFF
, 141px 1544px #FFF , 37px 900px #FFF , 184px 72px #FFF , 1797px 128px #FFF , 507px 1861px #FFF
, 99px 1489px #FFF , 149px 1010px #FFF , 807px 38px #FFF , 855px 58px #FFF , 83px 1095px #FFF
, 1418px 377px #FFF , 677px 86px #FFF , 862px 179px #FFF , 1058px 185px #FFF , 50px 1772px #FFF
, 191px 1544px #FFF , 377px 90px #FFF , 184px 712px #FFF , 1797px 128px #FFF , 507px 1861px #FFF
, 14px 966px #FFF , 872px 94px #FFF , 1705px 199px #FFF , 1318px 113px #FFF , 1856px 1549px #FFF
, 172px 1482px #FFF , 196px 54px #FFF , 355px 182px #FFF , 1242px 12px #FFF , 226px 344px #FFF
, 129px 1040px #FFF , 253px 44px #FFF , 1163px 75px #FFF , 426px 62px #FFF , 721px 1761px #FFF
, 36px 510px #FFF , 702px 159px #FFF , 1883px 483px #FFF , 680px 104px #FFF , 870px 1599px #FFF
, 96px 1808px #FFF , 916px 77px #FFF , 1223px 136px #FFF , 506px 93px #FFF
}

@keyframes star_anti {
  0% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(-2000px)
  }
}
</style>
