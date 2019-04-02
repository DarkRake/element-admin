import { mapGetters } from 'vuex'
import * as SecurityAPI from '@/api/system-management/security'

export default {
  created() {
    this.queryAllMicroService()
  },
  computed: {
    ...mapGetters([
      'dictionaries'
    ])
  },
  methods: {
    queryAllMicroService () {
      SecurityAPI.queryAllMicroService().then(data => {
        this.$store.dispatch('loadAllMicroService', data)
      })
    },
    initForm() {
      return {
        id: null,
        serviceId: null,
        securityDef: null,
        name: '',
        remark: ''
      }
    },
    initRules() {
      return {
        serviceId: [{
          required: true, message: '请选择所属微服务', trigger: 'change'
        }],
        securityDef: [{
          required: true, message: '请输入资源定义', trigger: 'blur'
        }, {
          min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur'
        }],
        name: [{
          required: true, message: '请输入资源名称', trigger: 'blur'
        }, {
          min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur'
        }],
        remark: [{
          min: 0, max: 200, message: '长度在 0 到 200 个字符', trigger: 'blur'
        }]
      }
    }
  }
}
