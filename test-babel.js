import babel from '@babel/core'


const jsxString = `
    import {Button} from 'antd';
    const Hello = () => {
        return <Button>hello</Button>
    };
    Hello()
    `;

const { code } = babel.transformSync(jsxString, {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'],
});


console.log(code)

