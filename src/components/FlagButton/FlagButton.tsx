import React from 'react'
import Flag, { FlagStyle } from '@components/Flag/Flag'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import type { MuiTelInputCountry } from '@shared/constants/countries'
import { getCallingCodeOfCountry } from '@shared/helpers/country'
import { Styled } from './FlagButton.styled'

export type FlagButtonProps = IconButtonProps & {
  isoCode: MuiTelInputCountry | null
  flagStyle?: FlagStyle
  forceCallingCode?: boolean
  isFlagsMenuOpened: boolean
  disableDropdown?: boolean
}

const FlagButton = (props: FlagButtonProps) => {
  const {
    isoCode,
    flagStyle,
    isFlagsMenuOpened,
    disableDropdown,
    forceCallingCode,
    ...iconButtonProps
  } = props

  return (
    <>
      {disableDropdown ? (
        <IconButton
          tabIndex={-1}
          className="MuiTelInput-IconButton"
          // eslint-disable-next-line jsx-a11y/aria-role
          role=""
          disableRipple
          // @ts-ignore
          sx={{ pointerEvents: 'none' }}
          component="span"
        >
          <Flag isoCode={isoCode} style={flagStyle} />
        </IconButton>
      ) : (
        <IconButton
          {...iconButtonProps}
          aria-label="Select country"
          className="MuiTelInput-IconButton"
          aria-haspopup="listbox"
          aria-controls={isFlagsMenuOpened ? 'select-country' : undefined}
          aria-expanded={isFlagsMenuOpened ? 'true' : 'false'}
        >
          <Flag isoCode={isoCode} style={flagStyle} />
        </IconButton>
      )}
      {forceCallingCode && isoCode ? (
        <Styled.CallingCodeSplitted>
          +{getCallingCodeOfCountry(isoCode)}
        </Styled.CallingCodeSplitted>
      ) : null}
    </>
  )
}

FlagButton.defaultProps = {
  disableDropdown: false,
  forceCallingCode: false,
  flagStyle: {}
}

export default FlagButton
