import React from 'react'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Flag from '@components/Flag/Flag'
import { COUNTRIES, MuiTelInputCountry } from '@shared/constants/countries'

import { Styled } from './FlagsMenuItem.styled'

export type FlagMenuItemProps = MenuItemProps & {
  isoCode: MuiTelInputCountry
  onSelectCountry: (isoCode: MuiTelInputCountry) => void
  displayNames: Intl.DisplayNames
}

const FlagMenuItem = (props: FlagMenuItemProps) => {
  const { isoCode, onSelectCountry, displayNames, ...menuItemProps } = props

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault()
    onSelectCountry(isoCode)
  }

  const countryName = displayNames.of(isoCode)

  return (
    <MenuItem
      {...menuItemProps}
      onClick={handleClick}
      role="option"
      data-testid={`option-${isoCode}`}
    >
      <Styled.ListItemIcon>
        <Flag isoCode={isoCode} />
      </Styled.ListItemIcon>
      <Styled.ListItemText>{countryName}</Styled.ListItemText>
      <Typography variant="body2" color="text.secondary">
        +{COUNTRIES[isoCode][0]}
      </Typography>
    </MenuItem>
  )
}

export default React.memo(FlagMenuItem)
