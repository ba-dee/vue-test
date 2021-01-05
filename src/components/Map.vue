<template>
    <div class="mapB">
        <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true"
                            :autoLocation="true"></bm-geolocation>
            <!--点-->
            <!--            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">-->
            <!--                &lt;!&ndash;提示信息&ndash;&gt;-->
            <!--                <bm-info-window :show="map.show">Hello~</bm-info-window>-->
            <!--            </bm-marker>-->

            <bm-marker v-for="item in map.marks"
                       :key="item.name"
                       :position="{lng: item.lng, lat: item.lat}"
                       :icon="item.icon"></bm-marker>


            <!--区域绘制-->
            <bm-are

        </baidu-map>
    </div>
</template>

<script>


    export default {
        name: "BaiDuMap",
        data: () => ({
            map: {
                center: {lng: 111.4472540000, lat: 31.3236200000},
                overlays: [],//划定区域坐标点
                zoom: 6,
                show: true,
                dragging: true,
                marks: [{
                    name: "apple",
                    lng: 111.4472540000,
                    lat: 31.3236200000,
                    icon: {
                        url: 'https://www.cnblogs.com/images/cnblogs_com/progor/1390402/o_bike2.png',
                        size: {width: 32, height: 32}
                    }
                }, {
                    name: "apple",
                    lng: 101.4472540000,
                    lat: 20.3236200000,
                    icon: {
                        url: 'https://www.cnblogs.com/images/cnblogs_com/progor/1390402/o_bike2.png',
                        size: {width: 80, height: 80}
                    }
                }
                ]


            },


        }),
        methods: {
            handler({BMap, map}) {
                console.log(BMap, map)
                // 鼠标缩放
                map.enableScrollWheelZoom();
                //map.disableDragging();
                // 点击事件获取经纬度
                map.addEventListener('click', function (e) {
                    console.log(e.point.lng, e.point.lat)

                    //var marker1 = new BMapGL.Marker(new BMapGL.Point(e.point.lng, e.point.lat));
                    //map.addOverlay(marker1);
                });
                map.addEventListener('dblclick', function (e) {
                    console.log(e.point.lng, e.point.lat)
                    return false;
                });
            }
        },


    }
</script>

<style>
    .map {
        width: 1920px;
        height: 1080px;
    }
</style>

