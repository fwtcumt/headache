import React from 'react';

class ResultWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { word, result } = this.props;

    return (
      <div className="resultword">
        <div className="result-tit">搜索结果</div>
        {result.length === 0 && <div className="noresult">
          抱歉，没有找到关于『<b>{word}</b>』的任何内容
        </div>}
        {result.length > 0 && <div>有结果！</div>}
      </div>
    );
  }
}

export default ResultWord;
