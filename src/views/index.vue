<template>
  <div class="app-container home">

    <el-row :gutter="20">
      <el-col :sm="24" :lg="24"><shortcuts /></el-col> 
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>通用后台管理框架</h2>
        <p>
          基于RuoYi-Vue3,把RuoYi-Vue3 调用后端Java Api 接口去掉，只保留前端框架，登录，登出，个人信息，列表等使用静态Json模拟数据，方便二次开发，上手难度低，适用各种后端。
          <hr/>
          如果对您有所帮助，请给一个 星星 ⭐ <a href="https://gitee.com/ldhnet/AntFlow-Vue3"><strong>https://gitee.com/ldhnet/AntFlow-Vue3</strong></a>  
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <p>
          <el-tag type="danger">&yen;免费开源</el-tag>
        </p>
        <p>
          <el-button
            type="primary"
            icon="Cloudy"
            plain
            @click="goTarget('https://gitee.com/ldhnet')"
            >访问码云</el-button
          >
          <el-button
            icon="HomeFilled"
            plain
            @click="goTarget('http://117.72.70.166/admin/')"
            >访问主页</el-button
          >
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row> 
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>借鉴RuoYi</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>联系信息</span>
            </div>
          </template>
          <div class="body">
            <p>
              <i class="el-icon-s-promotion"></i> 官网：<el-link
                href="http://117.72.70.166/admin/"
                target="_blank"
                >http://117.72.70.166/admin/</el-link
              >
            </p>
            <p>
              <i class="el-icon-user-solid"></i> QQ群：
               <a>972107977</a>
            </p> 
            <p>
              <i class="el-icon-user-solid"></i> 邮箱：
               <a>574427343@qq.com</a>
            </p> 
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>更新日志</span>
            </div>
          </template>
          <el-collapse accordion>
            <el-collapse-item title="v3.0.0 - 2024-08-10">
              <ol> 
                <li>其他细节优化</li>
              </ol>
            </el-collapse-item>
            <el-collapse-item title="v2.0.0 - 2024-08-08">
              <ol>
                <li>Mock Data</li> 
                <li>其他细节优化</li>
              </ol>
            </el-collapse-item>
 
            <el-collapse-item title="v1.0.0 - 2024-08-01">
              <ol>
                <li>防RuoYi-Vue版前端正式发布</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col> 
    </el-row>
  </div>
</template>

<script setup name="Index">
import shortcuts from "@/components/dashboard/Shortcuts";
const version = ref('3.0.0')

console.log("VITE_APP_BASE_API=======",import.meta.env.BASE_URL);

function goTarget(url) {
  window.open(url, '__blank')
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

