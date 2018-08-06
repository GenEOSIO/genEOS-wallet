<template>
    <section class="settings">
        <section class="item" v-for="link in links">
            <router-link :to="{name:link.route}">
                <figure class="icon"><i class="fa" :class="'fa-'+link.icon"></i></figure>
                <figure class="text">{{link.name}}</figure>
            </router-link>
        </section>
    </section>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import * as Actions from '../store/constants';
    import {RouteNames} from '../vue/Routing'
    import AlertMsg from '../models/alerts/AlertMsg'

    export default {
        data(){ return {
            links:[]
        }},
        mounted(){
            this.links = [
                {route:RouteNames.NETWORKS, name:this.locale(this.langKeys.SETTINGSMENU_Networks), icon:'globe'},
                {route:RouteNames.LANGUAGE, name:this.locale(this.langKeys.SETTINGSMENU_Language), icon:'language'},
                {route:RouteNames.AUTO_LOCK, name:this.locale(this.langKeys.SETTINGSMENU_AutoLock), icon:'clock-o'},
                {route:RouteNames.CHANGE_PASSWORD, name:this.locale(this.langKeys.SETTINGSMENU_Password), icon:'shield'},
                {route:RouteNames.BACKUP, name:this.locale(this.langKeys.SETTINGSMENU_Backup), icon:'archive'},
                {route:RouteNames.DESTROY, name:this.locale(this.langKeys.SETTINGSMENU_Destroy), icon:'trash'},
            ]
        }
    }
</script>

<style lang="scss">

    .settings {
        padding:40px 0;

        .item {
            cursor: pointer;
            transition:background 0.2s ease;
	    border-bottom:1px solid #f5f5f8;
	    margin-left: 20px;
	    margin-right: 20px;

            &:hover {
                background:#f8f8f8;
            }

            .icon {
                margin-left: 10px;
                display:inline-block;
                font-size:16px;
                color:#4f566e;
                width:30px;
                text-align:center;
                margin-right:10px;
            }

            .text {
                padding:16px 0;
                display:inline-block;
                font-size:16px;
                color:#4f566e;
                font-family:'Open Sans',sans-serif;
		font-style: regular;
                font-weight:300;
            }
        }
    }
</style>
