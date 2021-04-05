import React from 'react'
import styled from '@emotion/styled'

interface Props extends LabelProps {
  text: string | number | undefined
  containerStyles?: Record<string, string | number>
}

interface LabelProps {
  size: string | number
  color?: string
  weight?: 'bold' | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  textAlign?: 'left' | 'center' | 'right'
  lineHeight?: string | number
  numberOfLine?: number
  fontFamily?: string
  textShadow?: string
  textOverflow?: 'ellipsis'
  whiteSpace?: 'nowrap'
  overflow?: 'hidden'
}

const Label = styled.label(
  ({ size, color, weight, lineHeight, fontFamily, textShadow, textOverflow, whiteSpace, overflow }: LabelProps) => ({
    fontSize: size,
    color: color ? color : '#FFFFFF',
    fontWeight: weight,
    lineHeight,
    fontFamily: fontFamily ? fontFamily : 'NanumGothic-Regular',
    textShadow,
    textOverflow,
    whiteSpace,
    overflow
  })
)

const FrequentlyLabel: React.FunctionComponent<Props> = ({
                                                           text,
                                                           size,
                                                           weight,
                                                           color,
                                                           textAlign,
                                                           lineHeight,
                                                           fontFamily,
                                                           containerStyles,
                                                           textShadow,
                                                           textOverflow,
                                                           whiteSpace,
                                                           overflow
                                                         }) => {
  const label = React.useMemo(() => {
    if (typeof text === 'number') {
      return text.toString()
    } else if (text) {
      return text
    } else {
      return ''
    }
  }, [ text ])

  return (
    <div
      style={{ ...containerStyles, textAlign: textAlign ? textAlign : 'left' }}
    >
      <Label
        size={size}
        weight={weight}
        color={color}
        lineHeight={lineHeight}
        fontFamily={fontFamily}
        textShadow={textShadow}
        textOverflow={textOverflow}
        whiteSpace={whiteSpace}
        overflow={overflow}
      >
        {label}
      </Label>
    </div>
  )
}

export default FrequentlyLabel
