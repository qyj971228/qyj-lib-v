import { defineComponent, type PropType } from "vue";
import './style/Hello.scss'

export default defineComponent({
  props: {
    msg: String as PropType<string>
  },
  setup(props) {
    return () => (
      <div className='hello'>hello{props.msg}</div>
    )
  }
})