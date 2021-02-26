<template>
    <div>
        <XHeader :title="title" headerType="line"></XHeader>
        <div class="notice-detail">
            <h3>上市券商2020年业绩“预告”:已有 12家净利润超10亿元中信证券达 149亿元</h3>
            <h5>2021-01-08 10:00:00</h5>
            <p>2020年，受到多层次资本市场不断完善，基础 制度改革稳步推进，交投活跃等因素驱动，.上市 券商业绩继续保持亮眼的增长态势。近日，40家 A股.上市券商中，已有15家披露2020年度业绩 情况，其中, 7家上市券商披露业绩快报，8家披 露业绩预告，15家公司净利润均有不同程度的增 长。</p>
            <p>在业绩整体飘红的背景下，2021 年开年以来, .上市券商的股价走势却表现平平。对此, 前海开 源基金首席经济学家杨德龙在接受《证券日报》 记者采访时表示:“现在市场还是以结构性行情 为主。此外，虽然券商的业绩很好，但目前还没 有开始大幅表现。未来的机会将主要聚焦头部券</p>
        </div>
    </div>
</template>

<script>
import XHeader from '../components/XHeader';
export default {
    name: 'Index',
    components: {
        XHeader
    },
    data() {
        return {
            title: '通知'
        };
    }
};
</script>
<style lang="scss">
// 临时详情样式
.notice-detail {
    border-top: 1px solid #ccc;
    padding: 0.1rem 0.2rem;
    text-align: left;
}
.notice-detail h3 {
    font-size: 0.18rem;
}
.notice-detail h5 {
    font-size: 0.12rem;
    color: #aaa;
    padding: 0.1rem;
    font-weight: normal;
    text-align: right;
}
.notice-detail p {
    margin: 0.1rem 0;
}
</style>
