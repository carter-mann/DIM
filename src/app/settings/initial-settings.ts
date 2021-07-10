import { defaultSettings, Settings as DimApiSettings } from '@destinyitemmanager/dim-api-types';
import { defaultLanguage } from 'app/i18n';
import { DestinyClass } from 'bungie-api-ts/destiny2';

export interface CustomStatWeights {
  [statHash: number]: number | undefined;
  [statHash: string]: number | undefined;
}

export interface CustomStatDef {
  id: string;
  label: string;
  class: DestinyClass;
  weights: CustomStatWeights;
}

// Todo(ryan): Temporary until api types are available
export enum UpgradeSpendTier {
  Nothing,
  LegendaryShards,
  EnhancementPrisms,
  AscendantShardsNotExotic,
  AscendantShards,
  AscendantShardsNotMasterworked,
  AscendantShardsLockEnergyType,
}

export interface Settings extends DimApiSettings {
  /** Selected columns for the Vault Organizer */
  readonly organizerColumnsGhost: string[];
  /** Item popup sidecar collapsed just shows icon and no character locations */
  sidecarCollapsed: boolean;
  activeMode: boolean;
  loUpgradeSpendTier: UpgradeSpendTier;

  /** In "Single Character Mode" DIM pretends you only have one (active) character and all the other characters' items are in the vault. */
  singleCharacter: boolean;

  /** whether to ignore mods/masterwork/etc for compare pane stats */
  compareBaseStats: boolean;

  /** welcome to the future! */
  customStats: CustomStatDef[];
}

export const initialSettingsState: Settings = {
  ...defaultSettings,
  language: defaultLanguage(),
  organizerColumnsGhost: ['icon', 'name', 'locked', 'tag', 'perks', 'notes'],
  compareBaseStats: false,
  sidecarCollapsed: false,
  activeMode: false,
  loUpgradeSpendTier: UpgradeSpendTier.Nothing,
  singleCharacter: false,
  customStats: [],
};
