import * as React from 'react';
import { connect } from 'react-redux';
import { acceptColor } from 'src/store/actions/colorActions';
import { getRemoteColors } from 'src/store/actions/apiActions';
import { hexToRgbConverter } from 'src/utils/hexToRgbConverter';
import { sanitizeInput } from 'src/utils/sanitizeInput';

import './Main.css';

interface IProps {
  flags: { loaded: string },
  getRemoteColors: () => void,
  acceptColor: (color: string) => void,
  colors: Array<{hex: string, name: string}>,
  backgroundColor: string,
  error: object,
}

interface IState {
  flags: { loaded: string },
  colors: Array<{hex: string, name: string}>,
  backgroundColor: string,
  error: string | any,
}

interface IStoreState {
  color: { acceptedColor: string },
  api: {
    remoteErrors: Array<{}>,
    flags: { loaded: string },
    colors: Array<{hex: string, name: string}>,
  }
}

class ColorPicker extends React.Component<IProps> {  
  public state = {
    colorInput: '',
    autosuggestOn: false,
    ready: false,
    opacity: 0.5
  };

  public componentDidMount() {
    console.log('componentDidMount');
    const ready = !this.props.flags.loaded;
    if (ready) {
      this.setState({ ready });
      this.props.getRemoteColors();
    }
  }

  public handleClick = (colors: Array<{hex: string, name: string}>, match: string | RegExp) => {
    const legitColors: Array<{ name: string, hex: string}> = colors.filter(color => color.name.match(match));
    const canUseColor = legitColors.length > 0;
    if (canUseColor) {
      const opacity = this.state.opacity;
      const newColor = legitColors[0].hex;
      const rgbaColor = hexToRgbConverter(newColor, opacity);
      this.props.acceptColor(rgbaColor);
    }
  };

  public handleChange = (e: { target: { value: any; }; }) => {
    const colorInput = e.target.value;
    const autosuggestOn = colorInput.length > 1;
    this.setState({ colorInput, autosuggestOn });
  };

  public render() {
    const { colorInput, autosuggestOn, ready } = this.state;
    const { colors, backgroundColor, error } = this.props;
    console.log('render props', this.props);
    const regPartial = new RegExp(sanitizeInput(colorInput), 'gi');
    const regFull = new RegExp('^' + sanitizeInput(colorInput) + '$', 'gi');
    const matchingColors = colors ? colors.filter(
      matching => autosuggestOn && matching.name.match(regPartial)
    ) : [];
    const MatchingColorsList = (
      <datalist id="datalist-colors">
        {matchingColors.map(color => (
          <option
            key={color.name}
            value={color.name.replace(colorInput, colorInput.toLocaleUpperCase())}
          />
        ))}
      </datalist>
    );

    const onClickHandler = () => {
      this.handleClick(matchingColors, regFull)
    }

    const pickedBackgroundColor = { background: backgroundColor };
    const connectionInfo = ready ? (
      <span style={{ color: 'green' }}>Colors downloaded &#10004;</span>
    ) : (
      <span style={{ color: 'red' }}>{error} &#9888;</span>
    );

    return (
      <div className="colorpicker" style={pickedBackgroundColor}>
        <h2>ColorPicker</h2>
        <p>Ready? {connectionInfo}</p>
        <input
          type="text"
          list="datalist-colors"
          value={colorInput.toLocaleLowerCase()}
          placeholder="Start typing color name..."
          onChange={this.handleChange}
        />
        {MatchingColorsList}
        <button onClick={onClickHandler}>
          Accept
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState): IState => {
  return {
    colors: state.api.colors,
    flags: state.api.flags,
    backgroundColor: state.color.acceptedColor,
    error: state.api.remoteErrors[state.api.remoteErrors.length - 1] || null,
  };
};

export default connect(
  mapStateToProps,
  {
    getRemoteColors,
    acceptColor
  }
)(ColorPicker);
