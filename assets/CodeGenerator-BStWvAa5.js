import{_ as ne,c as T,b as c,e as l,w as t,m as y,r as i,o as v,d as m,F as R,i as P,p as x,t as S,E as b,j as z}from"./index-imeRkZGx.js";const se={class:"code-generator-page"},re={class:"page-header"},ie={class:"header-actions"},ue={class:"fields-config"},de={class:"card-header"},me={class:"header-actions"},pe={class:"code-preview"},ce={class:"language-vue"},ge={__name:"CodeGenerator",setup(fe){const a=z({type:"crud",moduleName:"",chineseName:"",tableName:"",fields:[{name:"id",type:"number",label:"ID"},{name:"name",type:"string",label:"名称"}],features:["search","export","pagination"],framework:"element-plus"}),L=y([{label:"Vue组件",value:"vue"},{label:"API接口",value:"api"},{label:"TypeScript",value:"ts"},{label:"SQL脚本",value:"sql"}]),$=y("vue"),g=z({vue:"",api:"",ts:"",sql:""}),C=y(!1),V=y(""),A=y("vue3"),E=y(!1),F=()=>{a.fields.push({name:"",type:"string",label:""})},j=s=>{a.fields.splice(s,1)},O=s=>{console.log("生成类型改变",s)},U=()=>{if(!a.moduleName){b.warning("请输入模块名称");return}g.vue=q(),g.api=B(),g.ts=G(),g.sql=Q(),b.success("代码生成成功")},q=()=>{const{moduleName:s,chineseName:e,fields:r,features:o}=a,u=r.map(p=>`      <el-table-column prop="${p.name}" label="${p.label}" />`).join(`
`),d=o.includes("search")?`
    <!-- 搜索区域 -->
    <div class="search-area">
      <el-form :model="searchForm" inline>
        ${r.slice(0,3).map(p=>`
        <el-form-item label="${p.label}">
          <el-input v-model="searchForm.${p.name}" placeholder="请输入${p.label}" clearable />
        </el-form-item>`).join("")}
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>`:"",f=`<template>
  <div class="${s.toLowerCase()}-page">
    <el-card>
      <template #header>
        <div class="page-header">
          <h3>${e}</h3>
          <el-button type="primary" @click="showAddDialog">
            <el-icon><Plus /></el-icon>
            新增
          </el-button>
        </div>
      </template>
${d}
      <!-- 表格区域 -->
      <el-table :data="tableData" v-loading="loading" stripe>
${u}
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="handleEdit(row)">
              编辑
            </el-button>
            <el-button type="danger" size="small" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      ${o.includes("pagination")?`
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          v-model:current-page="pagination.currentPage"
          v-model:page-size="pagination.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="pagination.total"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>`:""}
    </el-card>
  </div>
</template>`,h=`<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const loading = ref(false)
const tableData = ref([])
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0
})

const searchForm = reactive({
  ${r.slice(0,3).map(p=>`${p.name}: ''`).join(`,
  `)}
})

// 方法实现
const handleSearch = () => {
  console.log('搜索', searchForm)
}

const handleReset = () => {
  Object.keys(searchForm).forEach(key => {
    searchForm[key] = ''
  })
}

const showAddDialog = () => {
  console.log('新增')
}

const handleEdit = (row) => {
  console.log('编辑', row)
}

const handleDelete = (row) => {
  console.log('删除', row)
}

const handleSizeChange = (val) => {
  pagination.pageSize = val
}

const handleCurrentChange = (val) => {
  pagination.currentPage = val
}
<\/script>`,w=`<style scoped lang="scss">
.${s.toLowerCase()}-page {
  padding: 20px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-area {
  margin-bottom: 20px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>`;return f+`

`+h+`

`+w},B=()=>{const{moduleName:s}=a,e=s.toLowerCase();return`import request from '@big/utils/request'

// 获取${a.chineseName}列表
export function get${s}List(params) {
  return request({
    url: '/api/${e}/list',
    method: 'get',
    params
  })
}

// 获取${a.chineseName}详情
export function get${s}Detail(id) {
  return request({
    url: \`/api/${e}/\${id}\`,
    method: 'get'
  })
}

// 创建${a.chineseName}
export function create${s}(data) {
  return request({
    url: '/api/${e}',
    method: 'post',
    data
  })
}

// 更新${a.chineseName}
export function update${s}(id, data) {
  return request({
    url: \`/api/${e}/\${id}\`,
    method: 'put',
    data
  })
}

// 删除${a.chineseName}
export function delete${s}(id) {
  return request({
    url: \`/api/${e}/\${id}\`,
    method: 'delete'
  })
}`},G=()=>{const{moduleName:s,fields:e}=a,r=e.map(o=>{let u="string";return o.type==="number"&&(u="number"),o.type==="boolean"&&(u="boolean"),o.type==="date"&&(u="Date"),`  ${o.name}: ${u}`}).join(`
`);return`// ${a.chineseName}类型定义
export interface ${s} {
${r}
  createTime?: string
  updateTime?: string
}

// ${a.chineseName}查询参数
export interface ${s}Query {
  ${e.slice(0,3).map(o=>`${o.name}?: string`).join(`
  `)}
  page?: number
  pageSize?: number
}

// ${a.chineseName}表单
export interface ${s}Form {
${r}
}`},Q=()=>{const{tableName:s,chineseName:e,fields:r}=a,o=r.map(u=>{let d="VARCHAR(255)";return u.type==="number"&&(d="INT"),u.type==="date"&&(d="DATETIME"),u.type==="boolean"&&(d="TINYINT(1)"),`  ${u.name} ${d} COMMENT '${u.label}'`}).join(`,
`);return`-- ${e}表
CREATE TABLE ${s} (
  id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT 'ID',
${o},
  create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  deleted TINYINT(1) DEFAULT 0 COMMENT '删除标识'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='${e}表';

-- 创建索引
CREATE INDEX idx_create_time ON ${s}(create_time);`},Y=()=>{const s=g[$.value];if(!s){b.warning("暂无代码");return}navigator.clipboard.writeText(s).then(()=>{b.success("代码已复制到剪贴板")})},H=()=>{if(!g.vue){b.warning("请先生成代码");return}const{moduleName:s}=a,e=new Blob([g.vue],{type:"text/plain"}),r=URL.createObjectURL(e),o=document.createElement("a");o.href=r,o.download=`${s}.vue`,o.click(),URL.revokeObjectURL(r),b.success("代码下载成功")},K=async()=>{if(!V.value){b.warning("请输入需求描述");return}E.value=!0,await new Promise(s=>setTimeout(s,2e3)),b.success("AI代码生成成功"),E.value=!1,C.value=!1,a.moduleName="User",a.chineseName="用户管理",a.tableName="sys_user",U()};return(s,e)=>{const r=i("el-button"),o=i("el-option"),u=i("el-select"),d=i("el-form-item"),f=i("el-input"),h=i("el-divider"),w=i("Plus"),p=i("el-icon"),N=i("el-checkbox"),X=i("el-checkbox-group"),J=i("Cpu"),I=i("el-form"),D=i("el-card"),M=i("el-col"),W=i("el-button-group"),Z=i("DocumentCopy"),ee=i("el-scrollbar"),le=i("el-empty"),te=i("el-row"),ae=i("MagicStick"),oe=i("el-dialog");return v(),T("div",se,[c("div",re,[e[13]||(e[13]=c("h2",null,"代码生成器",-1)),c("div",ie,[l(r,{type:"primary",icon:"MagicStick",onClick:e[0]||(e[0]=n=>C.value=!0)},{default:t(()=>[...e[11]||(e[11]=[m("AI生成代码",-1)])]),_:1}),l(r,{type:"success",icon:"Download",onClick:H},{default:t(()=>[...e[12]||(e[12]=[m("下载代码",-1)])]),_:1})])]),l(te,{gutter:20},{default:t(()=>[l(M,{span:8},{default:t(()=>[l(D,{class:"config-card"},{header:t(()=>[...e[14]||(e[14]=[c("span",null,"生成配置",-1)])]),default:t(()=>[l(I,{model:a,"label-width":"100px","label-position":"top"},{default:t(()=>[l(d,{label:"生成类型"},{default:t(()=>[l(u,{modelValue:a.type,"onUpdate:modelValue":e[1]||(e[1]=n=>a.type=n),placeholder:"请选择类型",onChange:O},{default:t(()=>[l(o,{label:"CRUD页面",value:"crud"}),l(o,{label:"表单页面",value:"form"}),l(o,{label:"列表页面",value:"list"}),l(o,{label:"详情页面",value:"detail"}),l(o,{label:"API接口",value:"api"}),l(o,{label:"数据模型",value:"model"})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"模块名称"},{default:t(()=>[l(f,{modelValue:a.moduleName,"onUpdate:modelValue":e[2]||(e[2]=n=>a.moduleName=n),placeholder:"如：User"},null,8,["modelValue"])]),_:1}),l(d,{label:"中文名称"},{default:t(()=>[l(f,{modelValue:a.chineseName,"onUpdate:modelValue":e[3]||(e[3]=n=>a.chineseName=n),placeholder:"如：用户管理"},null,8,["modelValue"])]),_:1}),l(d,{label:"表名/路径"},{default:t(()=>[l(f,{modelValue:a.tableName,"onUpdate:modelValue":e[4]||(e[4]=n=>a.tableName=n),placeholder:"如：sys_user"},null,8,["modelValue"])]),_:1}),l(h,{"content-position":"left"},{default:t(()=>[...e[15]||(e[15]=[m("字段配置",-1)])]),_:1}),c("div",ue,[(v(!0),T(R,null,P(a.fields,(n,k)=>(v(),T("div",{key:"field-"+k,class:"field-item"},[l(f,{modelValue:n.name,"onUpdate:modelValue":_=>n.name=_,placeholder:"字段名",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),l(u,{modelValue:n.type,"onUpdate:modelValue":_=>n.type=_,placeholder:"类型",size:"small"},{default:t(()=>[l(o,{label:"文本",value:"string"}),l(o,{label:"数字",value:"number"}),l(o,{label:"日期",value:"date"}),l(o,{label:"布尔",value:"boolean"}),l(o,{label:"枚举",value:"enum"})]),_:1},8,["modelValue","onUpdate:modelValue"]),l(f,{modelValue:n.label,"onUpdate:modelValue":_=>n.label=_,placeholder:"标签",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),l(r,{type:"danger",icon:"Delete",circle:"",size:"small",onClick:_=>j(k)},null,8,["onClick"])]))),128)),l(r,{type:"primary",size:"small",onClick:F,style:{width:"100%"}},{default:t(()=>[l(p,null,{default:t(()=>[l(w)]),_:1}),e[16]||(e[16]=m(" 添加字段 ",-1))]),_:1})]),l(h,{"content-position":"left"},{default:t(()=>[...e[17]||(e[17]=[m("高级选项",-1)])]),_:1}),l(d,{label:"功能选项"},{default:t(()=>[l(X,{modelValue:a.features,"onUpdate:modelValue":e[5]||(e[5]=n=>a.features=n)},{default:t(()=>[l(N,{label:"search"},{default:t(()=>[...e[18]||(e[18]=[m("搜索功能",-1)])]),_:1}),l(N,{label:"export"},{default:t(()=>[...e[19]||(e[19]=[m("导出功能",-1)])]),_:1}),l(N,{label:"import"},{default:t(()=>[...e[20]||(e[20]=[m("导入功能",-1)])]),_:1}),l(N,{label:"batch"},{default:t(()=>[...e[21]||(e[21]=[m("批量操作",-1)])]),_:1}),l(N,{label:"pagination"},{default:t(()=>[...e[22]||(e[22]=[m("分页",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"UI框架"},{default:t(()=>[l(u,{modelValue:a.framework,"onUpdate:modelValue":e[6]||(e[6]=n=>a.framework=n)},{default:t(()=>[l(o,{label:"Element Plus",value:"element-plus"}),l(o,{label:"Ant Design Vue",value:"ant-design"}),l(o,{label:"Naive UI",value:"naive-ui"})]),_:1},8,["modelValue"])]),_:1}),l(r,{type:"primary",onClick:U,style:{width:"100%"}},{default:t(()=>[l(p,null,{default:t(()=>[l(J)]),_:1}),e[23]||(e[23]=m(" 生成代码 ",-1))]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(M,{span:16},{default:t(()=>[l(D,{class:"code-card"},{header:t(()=>[c("div",de,[e[25]||(e[25]=c("span",null,"代码预览",-1)),c("div",me,[l(W,{size:"small"},{default:t(()=>[(v(!0),T(R,null,P(L.value,n=>(v(),x(r,{key:n.value,type:$.value===n.value?"primary":"",onClick:k=>$.value=n.value},{default:t(()=>[m(S(n.label),1)]),_:2},1032,["type","onClick"]))),128))]),_:1}),l(r,{size:"small",onClick:Y},{default:t(()=>[l(p,null,{default:t(()=>[l(Z)]),_:1}),e[24]||(e[24]=m(" 复制 ",-1))]),_:1})])])]),default:t(()=>[c("div",pe,[g[$.value]?(v(),x(ee,{key:0,height:"calc(100vh - 320px)"},{default:t(()=>[c("pre",null,[c("code",ce,S(g[$.value]),1)])]),_:1})):(v(),x(le,{key:1,description:"请配置后生成代码"}))])]),_:1})]),_:1})]),_:1}),l(oe,{modelValue:C.value,"onUpdate:modelValue":e[10]||(e[10]=n=>C.value=n),title:"AI代码生成",width:"700px"},{footer:t(()=>[l(r,{onClick:e[9]||(e[9]=n=>C.value=!1)},{default:t(()=>[...e[26]||(e[26]=[m("取消",-1)])]),_:1}),l(r,{type:"primary",onClick:K,loading:E.value},{default:t(()=>[l(p,null,{default:t(()=>[l(ae)]),_:1}),e[27]||(e[27]=m(" AI生成 ",-1))]),_:1},8,["loading"])]),default:t(()=>[l(I,{"label-width":"100px"},{default:t(()=>[l(d,{label:"需求描述"},{default:t(()=>[l(f,{modelValue:V.value,"onUpdate:modelValue":e[7]||(e[7]=n=>V.value=n),type:"textarea",rows:6,placeholder:"请描述你想要生成的功能，例如：创建一个用户管理页面，包含增删改查功能，字段有：姓名、年龄、部门、职位"},null,8,["modelValue"])]),_:1}),l(d,{label:"生成语言"},{default:t(()=>[l(u,{modelValue:A.value,"onUpdate:modelValue":e[8]||(e[8]=n=>A.value=n)},{default:t(()=>[l(o,{label:"Vue 3 + Element Plus",value:"vue3"}),l(o,{label:"React + Ant Design",value:"react"}),l(o,{label:"Angular + Material",value:"angular"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},ve=ne(ge,[["__scopeId","data-v-94292b32"]]);export{ve as default};
