using Microsoft.JSInterop;

namespace Pulse_Blazor.Services
{
    public class LanguageService
    {
        private string _currentLanguage = "da";
        private IJSRuntime _js;
        private List<Action> _subscribers = new();

        public string CurrentLanguage
        {
            get => _currentLanguage;
            set
            {
                if (_currentLanguage != value)
                {
                    _currentLanguage = value;
                    NotifyStateChanged();
                }
            }
        }

        public LanguageService(IJSRuntime js)
        {
            _js = js;
        }

        public async Task InitializeAsync()
        {
            try
            {
                var savedLang = await _js.InvokeAsync<string>("localStorage.getItem", "language");
                if (!string.IsNullOrEmpty(savedLang))
                {
                    _currentLanguage = savedLang;
                }
            }
            catch { }
        }

        public async Task SetLanguageAsync(string language)
        {
            CurrentLanguage = language;
            try
            {
                await _js.InvokeVoidAsync("localStorage.setItem", "language", language);
            }
            catch { }
        }

        public void Subscribe(Action callback)
        {
            _subscribers.Add(callback);
        }

        public void Unsubscribe(Action callback)
        {
            _subscribers.Remove(callback);
        }

        private void NotifyStateChanged()
        {
            foreach (var callback in _subscribers)
            {
                callback?.Invoke();
            }
        }
    }
}
