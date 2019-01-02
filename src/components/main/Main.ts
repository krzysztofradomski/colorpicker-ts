// import * as React from 'react';
// const { connect } = require('react-redux');
// import { acceptColor } from 'src/store/actions/colorActions';
// import { getRemoteColors } from 'src/store/actions/apiActions';
// import { hexToRgbConverter } from 'src/utils/hexToRgbConverter';
// import { sanitizeInput } from 'src/utils/sanitizeInput';
// import './../css/colorpicker.css';

// interface Props {}

// class ColorPicker extends React.Component<Props, any> {
//   state = {
//     colorInput: '',
//     autosuggestOn: false,
//     ready: false,
//     opacity: 0.5
//   };

//   componentDidMount() {
//     const ready = !this.props.flags.loaded;
//     if (ready) {
//       this.setState({ ready });
//       this.props.getRemoteColors();
//     }
//   }

//   handleClick = (colors, match) => {
//     const legitColor = colors.filter(color => color.name.match(match));
//     const canUseColor = legitColor.length > 0 ? legitColor[0] : false;
//     if (canUseColor) {
//       const opacity = this.state.opacity;
//       const rgbaColor = hexToRgbConverter(canUseColor.hex, opacity);
//       this.props.acceptColor(rgbaColor);
//     }
//   };

//   handleChange = e => {
//     const colorInput = e.target.value;
//     const autosuggestOn = colorInput.length > 1;
//     this.setState({ colorInput, autosuggestOn });
//   };

//   render() {
//     const { colorInput, autosuggestOn, ready } = this.state;
//     const { colors, backgroundColor, error } = this.props;
//     const regPartial = new RegExp(sanitizeInput(colorInput), 'gi');
//     const regFull = new RegExp('^' + sanitizeInput(colorInput) + '$', 'gi');
//     const matchingColors = colors.filter(
//       matching => autosuggestOn && matching.name.match(regPartial)
//     );
//     const matchingColorsList = matchingColors.map(color => (
//       <option
//         key={color.name}
//         value={color.name.replace(colorInput, colorInput.toLocaleUpperCase())}
//       />
//     ));

//     const pickedBackgroundColor = { background: backgroundColor };
//     const connectionInfo = ready ? (
//       <span style={{ color: 'green' }}>Colors downloaded &#10004;</span>
//     ) : (
//       <span style={{ color: 'red' }}>{error} &#9888;</span>
//     );

//     return (
//       <div className="colorpicker" style={pickedBackgroundColor}>
//         <h2>ColorPicker</h2>
//         <p>Ready? {connectionInfo}</p>
//         <input
//           type="text"
//           list="datalist-colors"
//           value={colorInput.toLocaleLowerCase()}
//           placeholder="Start typing color name..."
//           onChange={this.handleChange}
//         />
//         <datalist id="datalist-colors">{matchingColorsList}</datalist>
//         <button onClick={() => this.handleClick(matchingColors, regFull)}>
//           Accept
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     colors: state.colors,
//     flags: state.flags,
//     backgroundColor: state.acceptedColor,
//     error: state.remoteErrors[state.remoteErrors.length - 1]
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     getRemoteColors,
//     acceptColor
//   }
// )(ColorPicker);
