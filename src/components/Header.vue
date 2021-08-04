<template>
  <header>
       <div class="logo"></div>
  </header>
 <nav>
     <ul>
         <li>首页</li>
         <li>坚果手机</li>
         <li>TNT</li>
         <li>官方自营</li>
         <li>服务</li>
     </ul>
 </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    margin-left: 270px;
}
li{
    display: inline-block;
    padding: 10px;
    
}

header{
    color: #fff;
    height: 45px;
    background-image: linear-gradient(90deg,#222325,#3b3c3f,#222325);
}
.logo{
    background: -webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAttJREFUOBFdlE1PU0EUhjv3g7ZWDbAgogluiLQm7mRpoiYYjQuUuDHq1n8g/gh/g3GjO0NgISYY0cSd7G1qQuIKtFEUCLct986MzzstlTjk5cyc857PmVtTGizvfWyMsTqyv4VYALPgLGeD3ML+GbmEfIsUb+ijc1AMZN05t2qtzUCH/U/wnf0P5A6yh8zAKkEax33NUdQ8z69GUfQK0jgZdyGVQQI8KMAhyEEMxuDswH2QpunHEANlqdfrXSTIOxQ1kEmH/Ao5AxWO58AkOAH2xUFfAwcEmyuXy1/UuwK9wXiN7S8wBt5XKpV5ZFjtdvtktVo9nyTJXZzvwz2DoQvGKWCdQLdNt9u9SdTXGPcxRCCB3I7jeAnSDs4v0DlaX+D8uyiKaevcY0pWwkO4p6M0vZcwwHmgWWgZStQ8JtA9rdVqcZZlTYK68sjIc/aHJNwDOYPzBNEIktj7OwkZZjloLqpGS+0W6Lb39nZHjYk8HNPpdA7Q7UbGpKRLFQEZIzO2lxVIQ7QcwrwUiaXKUmQSJ8aSOaZ9EvuYMhC6yLAw8facm1RrAz0JQjG6byXTyTjuulDrgORyJtQxnhpQh4mzdtt5P42j3smwqrCRS2FI6ErwwoMKdfz7p+pSLuFbQpANiJeouEuyOITvp1bZHpIeYYWb0uPqhyBB2BuDu69y2tCMlrE+6jOGvcPzpUiDNoWPnIsUSDq1/N/KKWQ5mpqaWrOF/QBGgf7UhlcrzoVvuJN7Xzjbb88WRUmcAXeU2a0rRrhyhvsEp7Z1tuY8FGtVs6PaEVqb41Gewu41K1UWOIHr2lS5qAqHH22r1bpiougl9U9Q/h/NB8eEj5JY8X6v163x1ArU8uF9mTb2hzMzM584x6HhsOE9bG5uXrB5/oxJXSeJHl4HW0Fw/e6IWwU5m3VGv1iv11tHvsPJHSkglprN5g385gnQ/2FDB3GLwBvwVhqNxpp4x33+Ag6ZF/5htjvJAAAAAElFTkSuQmCC) 1x,url(data:image/png;base64,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) 2x) no-repeat 50%;
    width: 20px;
    height: 20px;
    float: left;
    padding: 13px;
    margin-left: 20px;
}
nav{
    font-size: 14px;
    color: rgb(88, 85, 85);
    align-items: center;
    clear: both;
    display: flex;
    background: #fff;
    height: 78px;
    box-shadow: 4px 2px 4px lightgray;
}
</style>