import * as React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { SettingsIcon } from '../../../assets/images/customization/SettingsIcon';
import { DropdownComponent } from '../../../components';
import {
    AVAILABLE_COLOR_THEMES,
    AVAILABLE_COLORS_TITLES,
    ThemeColorTitleInterface,
} from '../../../themes';
import { ColorSettings } from './ColorSettings';

export const handleConvertColorCode = (value: string, fromRGB?: boolean) => (
    fromRGB ? `--grb-${value.slice(2)}` :  `--${value.slice(6)}`
);

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

interface State {
    colorSettingsItem: ThemeColorTitleInterface;
}

const defaultColorSettingsItem = {
    key: '',
    title: '',
};

export class CustomizationThemes extends React.Component<Props, State> {
    public state = {
        colorSettingsItem: defaultColorSettingsItem,
    };

    public renderThemesDropdown() {
        const { translate } = this.props;

        return (
            <div className="pg-customization-themes__themes">
                <label className="pg-customization-themes__themes__dropdown-label">
                    {translate('page.body.customization.themes.selector.label')}
                </label>
                <DropdownComponent
                    className="pg-customization-themes__themes__dropdown"
                    list={this.handleGetThemesTitlesList()}
                    onSelect={this.handleChangeCurrentTheme}
                    placeholder={''}
                />
            </div>
        );
    }

    public renderColorsItem(item: ThemeColorTitleInterface, index: number) {
        const { translate } = this.props;
        const grbItemKey = handleConvertColorCode(item.key);

        return (
            <div key={index} className="pg-customization-themes__colors__item" onClick={e => this.handleSetColorSettingsItem(item)}>
                <div className="pg-customization-themes__colors__item__content">
                    <span
                        className="pg-customization-themes__colors__item__content__circle"
                        style={{backgroundColor: `var(${grbItemKey})`}}
                    />
                    <span className="pg-customization-themes__colors__item__content__title">{translate(item.title)}</span>
                </div>
                <div className="pg-customization-themes__colors__item__settings-icon">
                    <SettingsIcon />
                </div>
            </div>
        );
    }

    public renderColors() {
        return (
            <div className="pg-customization-themes__colors">
                <PerfectScrollbar>
                    {AVAILABLE_COLORS_TITLES.map((item, index) => this.renderColorsItem(item, index))}
                </PerfectScrollbar>
            </div>
        );
    }

    public render() {
        const { translate } = this.props;
        const { colorSettingsItem } = this.state;

        return (
            <div className="pg-customization-themes">
                {this.renderThemesDropdown()}
                {this.renderColors()}
                <ColorSettings
                    handleCloseColorSettings={this.handleSetColorSettingsItem}
                    item={colorSettingsItem}
                    translate={translate}
                />
            </div>
        );
    }

    private handleGetThemesTitlesList = () => {
        const { translate } = this.props;

        return AVAILABLE_COLOR_THEMES.map(item => translate(item.title));
    };

    private handleSetColorSettingsItem = (item?: ThemeColorTitleInterface) => {
        let newSettings: ThemeColorTitleInterface = defaultColorSettingsItem;

        if (item) {
            newSettings = item;
        }

        this.setState({ colorSettingsItem: newSettings });
    };


    private handleChangeCurrentTheme = (index: number) => {
        const rootElement = document.documentElement;

        if (rootElement) {
            AVAILABLE_COLORS_TITLES.reduce((result, item) => {
                const newItemColor = AVAILABLE_COLOR_THEMES[index].theme.find(theme => theme.key === item.key);

                if (newItemColor) {
                    rootElement.style.setProperty(item.key, newItemColor.value);
                }

                return result;
            }, {});
        }
    };
}
