import React from 'react';
import RouteLoading from 'components/RouteLoading';

const getLoadable = loader => {
  return class Loadable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { Child: null }
    }

    componentDidMount() {
      if (this.state.Child) return;
      loader().then(res => {
        this.setState({ Child: res.default });
      });
    }

    componentWillUnmount() {
      this.setState({ Child: null });
    }

    render() {
      const { Child } = this.state;
      if (!Child) {
        return <RouteLoading />;
      }
      return <Child {...this.props} />;
    }
  }
}

export default getLoadable;
