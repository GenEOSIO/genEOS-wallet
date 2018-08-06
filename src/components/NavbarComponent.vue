<template>
    <nav :class="navState()">
        <figure class="logo" v-if="showLogo()"></figure>
        <section class="breadcrumb" v-else>
            <figure class="icon" v-on:click="back">
                <i class="fa fa-chevron-left"></i>
            </figure>
            <figure class="route">{{breadcrumb()}}</figure>
        </section>
        <figure class="settings-button" v-on:click="toggleSettings">
            <i class="fa fa-gear"></i>
        </figure>
    </nav>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import {RouteNames} from '../vue/Routing'

    export default {
        computed: {
            ...mapState([
                'scatter'
            ])
        },
        methods: {
            back(){ this.$router.back() },
            showLogo(){
                switch(this.$route.name){
                    case RouteNames.ENTRY:
                    case RouteNames.MAIN_MENU:
                    case RouteNames.FIRST_TIME:
                    case RouteNames.ONBOARDING:
                    case RouteNames.SHOW_MNEMONIC: return true;
                    default: return false;
                }
            },
            navState(){
                switch(this.$route.name){
                    case RouteNames.ENTRY: if(this.scatter.settings.hasEncryptionKey) return 'locked';
                                           else return 'no-chain';
                    case RouteNames.MAIN_MENU: return 'main-menu-nav';
                    default: return '';
                }
            },
            breadcrumb(){
                // TODO: Localize
                switch(this.$route.name){
                    case RouteNames.LOAD_FROM_BACKUP: return 'Import Keychain';
                    case RouteNames.SETTINGS: return 'Settings';
                    case RouteNames.TRANSFER: return 'Transfer';
                    case RouteNames.IDENTITIES: return 'Identities';
                    case RouteNames.IDENTITY: return 'Identity';
                    case RouteNames.PERMISSIONS:
                    case RouteNames.DOMAIN_PERMISSIONS: return 'Permissions';
                    case RouteNames.HISTORY: return 'History';
                    case RouteNames.NETWORKS: return 'Networks';
                    case RouteNames.NETWORK: return 'Network';
                    case RouteNames.CHANGE_PASSWORD: return 'Password';
                    case RouteNames.BACKUP:
                    case RouteNames.EXPORT_JSON: return 'Backup';
                    case RouteNames.DESTROY: return 'Destroy';
                    case RouteNames.AUTO_LOCK: return 'Auto Lock';
                    case RouteNames.LANGUAGE: return 'Language';
                    case RouteNames.KEYPAIRS: return 'Key Pair';
                    case RouteNames.KEYS: return 'Key Pairs';
                }
                return 'Undefined'
            },
            toggleSettings(){
                if(this.$route.name === RouteNames.SETTINGS) this.back();
                else this.$router.push({name:RouteNames.SETTINGS})
            }
        },
    }
</script>

<style lang="scss">
    nav {
        height:600px;
        max-height:60px;
        line-height:60px;
        transition:all 0.2s ease;
        transition-property: max-height, line-height, background;
        padding:0 20px;
        overflow:hidden;
        /*border-bottom:1px solid #f9f9f9;*/
        position: relative;
        z-index:2;
	background:#56e4c4 url('mark.svg') no-repeat;
	background-size: 30px 33px;
	background-position-x: 7%;
	background-position-y: 50%;

        .settings-button {
            cursor: pointer;
            float: right;
            height: 60px;
            margin-left:10px;
            line-height: 59px;
            font-size: 20px;
            text-align:right;
            color: #ffffff;
        }

        .breadcrumb {
	    background:#56e4c4;
            width:calc(100% - 60px);
            float:left;

            .icon {
                cursor: pointer;
                display:inline-block;
                font-size:16px;
                color:#ffffff;
                padding-right:15px;
                transition: color 0.2s ease;

                &:hover {
                    color:rgba(0,0,0,0.3);
                }
            }

            .route {
                display:inline-block;
                font-family:'Open Sans', sans-serif;
                font-size:16px;
                color:#ffffff;
                vertical-align: top;
            }
        }

        &.no-chain {
            max-height:299px;
            line-height:299px;

            background:#fff url('wallet.svg') no-repeat;
	    background-position: center;
	    background-size: 238px 61px;
        }

        &.locked {
            max-height:450px;
            line-height:450px;
            background:#fff url('wallet.svg') no-repeat;
	    background-position: center;
	    background-size: 238px 61px;

        }

        &.main-menu-nav {
	    background:#56e4c4 url('mark.svg') no-repeat;
	    background-size: 30px 33px;
	    background-position-x: 7%;
	    background-position-y: 50%;
        }
    }
</style>
