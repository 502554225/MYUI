<template>
    <div class="footer">
        <div class="part1">
            <span>关于我们</span>
            <span>联系我们</span>
            <span>加入我们</span>
            <span>帮助中心</span>
        </div>
        <div class="part2">
            <div class="part2-item">
                <div class="weibo"></div>
                <div>新浪微博</div>
            </div>
            <div class="part2-item">
                <div class="weixin"></div>
                <div>官方微信</div>
            </div>
            <div class="part2-item">
                <div class="download"></div>
                <div>客户端下载</div>
            </div>
        </div>
    </div>
</template>
<style>
.footer{
    display: flex;
    background:rgba(82, 149, 231, 0.07) ;
    padding: 30px;
}
.part1{
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: center;
}
.part2{
    display: flex;
    flex: auto;
    justify-content: center;
}
.part2-item{
    display: flex;
    margin-left: 50px;
    flex-direction: column;
    align-items: center;
    
}

.weixin,.weibo,.download{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.weibo{
    background: url(../../static/img/weibo.jpg) no-repeat;
    background-size: 100% 100%
}
.weixin{
    background: url(../../static/img/weixin.jpg) no-repeat;
    background-size: 100% 100%
}
.download{
    background: url(../../static/img/download.jpg)  no-repeat center;
    background-size: 120% 120%
}
span{
    margin-left: 20px;
}
</style>
