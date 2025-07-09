# Acme Lottery

A modern, intuitive lottery number picker app built with React Native and Expo. Select your lucky numbers, manage multiple plays, and purchase your lottery tickets with ease.

## Features

- **Number Selection**: Interactive grid to pick 5 numbers from 1-42
- **Play Management**: Add up to 3 plays with visual number display
- **Clean UI**: Beautiful, production-ready interface with smooth animations
- **Cross-Platform**: Runs on iOS, Android, and Web
- **State Management**: Persistent play storage with Zustand
- **Type Safety**: Full TypeScript implementation

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd acme-lottery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the app:
   - **iOS**: Scan QR code with Camera app
   - **Android**: Scan QR code with Expo Go app
   - **Web**: Press `w` in terminal or visit `http://localhost:8081`

## 📱 How to Use

1. **Add a Play**: Tap "Add play" on the home screen
2. **Select Numbers**: Choose exactly 5 numbers from the grid (1-42)
3. **Confirm Selection**: Tap "Play Numbers" to add to your list
4. **Manage Plays**: View all plays on home screen, delete unwanted ones
5. **Purchase**: Tap "Purchase" to see your final selections

## Project Structure

```
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   ├── number-picker.tsx  # Number selection screen
│   └── +not-found.tsx     # 404 page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── NumberGrid.tsx    # Number selection grid
│   ├── PlayCard.tsx      # Individual play display
│   └── SelectedNumbers.tsx # Selected numbers preview
├── hooks/                # Custom React hooks
├── store/                # Zustand state management
├── src/
│   ├── constants/        # App constants and strings
│   └── theme/           # Design system (colors, metrics)
└── types/               # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework**: React Native with Expo SDK 52
- **Navigation**: Expo Router 4.0
- **State Management**: Zustand
- **Styling**: StyleSheet API
- **Icons**: Lucide React Native
- **Fonts**: Inter (via @expo-google-fonts)
- **Language**: TypeScript

## Design System

The app uses a cohesive design system with:

- **Colors**: Primary blue theme with semantic color tokens
- **Typography**: Inter font family with consistent sizing
- **Spacing**: 8px grid system for consistent layouts
- **Components**: Reusable UI components with proper theming

## Key Dependencies

```json
{
  "expo": "^53.0.0",
  "expo-router": "~5.0.2",
  "react": "19.0.0",
  "react-native": "0.79.1",
  "zustand": "^5.0.6",
  "@expo-google-fonts/inter": "^0.4.1"
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build:web` - Build for web production
- `npm run lint` - Run ESLint

## 🌐 Platform Support

- **iOS**: Full native support
- **Android**: Full native support  
- **Web**: Optimized web experience

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ using Expo and React Native