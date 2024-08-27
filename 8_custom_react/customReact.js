const reactElement = {
    type:'a',
    props: {
        href:'http://google.com' ,
        target: '_blank'
    },
    children: 'click me to visit google'
}
const mainContainer = document.querySelectorAll('#root')

customRender(reactElement , mainContainer)