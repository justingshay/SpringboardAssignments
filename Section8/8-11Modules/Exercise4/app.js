async function loadConfig() {
    const theme = await import('./theme.mjs');
    const curHour = new Date().getHours();
    //console.log(curHour);

    const darkThemeEnd = 6;
    const lightThemeEnd = 18;

    if(curHour >= darkThemeEnd && curHour < lightThemeEnd) {
        theme.setLightTheme();
    } else {
        theme.setDarkTheme();
    }
}

loadConfig();