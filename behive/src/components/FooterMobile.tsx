export const Footer: React.FC = () => {
    return (
      <footer className="bg-secondaryGrey text-center py-8">
        <div className="flex justify-center mb-4">
          <img src="/images/appstore.svg" alt="App Store" className="h-12 mx-2" />
          <img src="/images/playstore.svg" alt="Google Play" className="h-12 mx-2" />
        </div>
        <p className="text-secondaryText text-body">Download our app now and boost productivity!</p>
        <p className="text-secondaryText text-body">© 2024 Bhive Workspace. All rights reserved.</p>
      </footer>
    );
};