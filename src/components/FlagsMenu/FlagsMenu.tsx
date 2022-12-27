import React from 'react'
import type { FlagStyle } from '@components/Flag/Flag'
import FlagsList from '@components/FlagsList/FlagsList'
import Menu, { MenuProps } from '@mui/material/Menu'
import type { MuiTelInputContinent } from '@shared/constants/continents'
import { MuiTelInputCountry } from '@shared/constants/countries'
import { DEFAULT_LANG } from '@shared/constants/lang'

export type FlagsMenuProps = Partial<MenuProps> & {
  isoCode: MuiTelInputCountry | null
  onlyCountries?: MuiTelInputCountry[]
  excludedCountries?: MuiTelInputCountry[]
  preferredCountries?: MuiTelInputCountry[]
  langOfCountryName?: string
  flagStyle?: FlagStyle
  continents?: MuiTelInputContinent[]
  onSelectCountry: (isoCode: MuiTelInputCountry) => void
}

const FlagsMenu = (props: FlagsMenuProps) => {
  const {
    anchorEl,
    isoCode,
    onSelectCountry,
    excludedCountries,
    onlyCountries,
    langOfCountryName,
    flagStyle,
    continents,
    preferredCountries,
    className,
    ...rest
  } = props

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      id="select-country"
      className={`MuiTelInput-Menu ${className || ''}`}
      MenuListProps={{
        role: 'listbox',
        'aria-activedescendant': isoCode ? `country-${isoCode}` : '',
        'aria-labelledby': 'select-country'
      }}
      {...rest}
    >
      <FlagsList
        onlyCountries={onlyCountries}
        excludedCountries={excludedCountries}
        preferredCountries={preferredCountries}
        continents={continents}
        isoCode={isoCode}
        langOfCountryName={langOfCountryName}
        flagStyle={flagStyle}
        onSelectCountry={onSelectCountry}
      />
    </Menu>
  )
}

FlagsMenu.defaultProps = {
  onlyCountries: [],
  excludedCountries: [],
  continents: [],
  preferredCountries: [],
  langOfCountryName: DEFAULT_LANG,
  flagStyle: {}
}

export default FlagsMenu
