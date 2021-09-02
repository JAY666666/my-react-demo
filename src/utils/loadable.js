/* eslint-disable import/no-anonymous-default-export */
import loadable from "react-loadable"
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
import { Component } from "react"

class loadingComponent extends Component {
    constructor(props) {
        super(props)
        NProgress.start()
    }

    componentDidMount() {
        NProgress.done()
    }

    render() {
        return (
            <div />
        )
    }
}

export default (loader, loading = loadingComponent) => {
    return loadable({
        loader,
        loading
    })
}