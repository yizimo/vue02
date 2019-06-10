<template>
  <div>
    <!--头部-->
    <HomePageHead></HomePageHead>


    <div class="wrapper uc-router">
      <ul>
        <li><a href="">首页</a></li>
        <li><span class="divider"></span></li>
        <li><span>个人中心</span></li>
      </ul>
    </div>

    <div class="wrapper">
      <div class="uc-main clearfix">
        <Ucside></Ucside>
        <div class="uc-content">
          <div class="uc-panel">
            <div class="uc-bigtit">我的订单</div>
            <div class="uc-panel-bd">
              <div class="uc-sort">
                <div class="uc-tabs">
                  <a class="item active" href="">所有订单</a>
                </div>
                <div class="uc-search">
                  <form action="">
                    <input type="text" class="sch-input" placeholder="输入商品名称,订单号，商品编号" />
                    <button class="sch-btn"><i class="iconfont icon-search"></i></button>
                  </form>
                </div>
              </div>
              <table class="uc-table">
                <thead>
                <td></td>
                <th></th>
                <th></th>
                <th width="120"></th>
                </thead>
                <tr class="hd order-meta">
                  <td colspan="4">
                    <div class="left">2016-05-29   订单号: 1947584672162364</div>
                    <div class="right">店铺：<a href="">小米旗舰店</a> <span class="del iconfont icon-shanchu"></span></div>
                  </td>
                </tr>
                <tr class="order-goods">
                  <td>
                    <div class="goods-info">
                      <img class="figure" src="" alt="" />
                      <a class="text-info refund" href="uc-apply-refund.html">申请退货</a>

                      <div class="info">
                        <div>小米短袖T恤 五彩换 黑色 S</div>
                        <div>499元×1</div>
                      </div>
                    </div>
                    <div class="goods-info">
                      <img class="figure" src="" alt="" />
                      <a class="text-info refund" href="uc-apply-refund.html">申请退货</a>
                      <div class="info">
                        <div>小米短袖T恤 五彩换 黑色 S</div>
                        <div>499元×1</div>
                      </div>
                    </div>
                    <div class="goods-info">
                      <img class="figure" src="" alt="" />
                      <a class="text-info refund" href="uc-apply-refund.html">申请退货</a>
                      <div class="info">
                        <div>小米短袖T恤 五彩换 黑色 S</div>
                        <div>499元×1</div>
                      </div>
                    </div>
                    <div class="goods-info">
                      <img class="figure" src="" alt="" />
                      <a class="text-info refund" href="uc-apply-refund.html">申请退货</a>
                      <div class="info">
                        <div>小米短袖T恤 五彩换 黑色 S</div>
                        <div>499元×1</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    金额：<span class="text-theme fwb">298.00元</span>
                  </td>
                  <td>
                    <span class="status">快件已签收</span><br />
                    <a class="text-info" href="uc-order-detail.html">订单详情</a><br />
                    <a class="text-info" href="">查看物流</a>
                  </td>
                  <td>
                    <a href="" class="ui-btn-theme uc-btn-md">追加评论</a>
                  </td>
                </tr>

                <tr class="hd order-meta">
                  <td colspan="4">
                    <div class="left">2016-05-29   订单号: 1947584672162364</div>
                    <div class="right">店铺：<a href="">小米旗舰店</a> <span class="del iconfont icon-shanchu"></span></div>
                  </td>
                </tr>
                <tr class="order-goods">
                  <td>
                    <div class="goods-info">
                      <img class="figure" src="" alt="" />
                      <a class="text-info refund" href="uc-apply-refund.html">申请退货</a>
                      <div class="info">
                        <div>小米短袖T恤 五彩换 黑色 S</div>
                        <div>499元×1</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    金额：<span class="text-theme fwb">298.00元</span>
                  </td>
                  <td>
                    <span class="status">快件已签收</span><br />
                    <a class="text-info" href="uc-order-detail.html">订单详情</a><br />
                    <a class="text-info" href="">查看物流</a>
                  </td>
                  <td>
                    <a href="" class="ui-btn-theme uc-btn-md">去付款</a>
                    <a href="" class="ui-btn-low ui-btn-hollow uc-btn-md mt10">取消订单</a>
                  </td>
                </tr>

                <tr class="hd order-meta">
                  <td colspan="4">
                    <div class="left">2016-05-29   订单号: 1947584672162364</div>
                    <div class="right">店铺：<a href="">小米旗舰店</a> <span class="del iconfont icon-shanchu"></span></div>
                  </td>
                </tr>
                <tr class="order-goods">
                  <td>
                    <div class="goods-info">
                      <img class="figure" src="" alt="" />
                      <a class="text-info refund" href="uc-apply-refund.html">申请退货</a>
                      <div class="info">
                        <div>小米短袖T恤 五彩换 黑色 S</div>
                        <div>499元×1</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    金额：<span class="text-theme fwb">298.00元</span>
                  </td>
                  <td>
                    <span class="status">快件已签收</span><br />
                    <a class="text-info" href="uc-order-detail.html">订单详情</a><br />
                    <a class="text-info" href="">查看物流</a>
                  </td>
                  <td>
                    <div class="time-left"><i class="iconfont icon-shijian"></i>还剩2天8时</div>
                    <a href="" class="ui-btn-theme uc-btn-md">确认收货</a>
                  </td>
                </tr>
              </table>
              <!--  <div class="pages">
                   <a class="page prev" href="">上一页</a>
                   <a class="page" href="">1</a>
                   <span class="cur-page">2</span>
                   <a class="page" href="">3</a>
                   <a class="page" href="">4</a>
                   <i class="page-split">...</i>
                   <a class="page" href="">71</a>
                   <a class="page next" href="">下一页</a>
               </div> -->

              <div class="ta-c">
                <ul class="pagination">
                  <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                  <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--脚部-->
    <div class="fatfooter">

    </div>
    <!--脚部-->
  </div>
</template>

<script>
  import '../../static/js/icheck/style.css'
  import '../../static/css/iconfont/iconfont.css'
  import '../../static/css/common.css'
  import '../../static/css/uc.css'
  import Ucside from '../page/uc_side'
  import HomePageHead from '../page/heardHomePage'

  export default {
      components: {
        HomePageHead,
        Ucside
      }
  }
</script>
