import { getInitials } from "../../utils/helper";
import PropTypes from "prop-types";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Display User Initials */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Yvann Guyonnet")} 
      </div>

      <div>
        {/* User Information */}
        <p className="text-sm text-cyan-50 font-medium">Yvann Guyonnet</p>
        <button
          className="text-sm text-slate-50 underline"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default ProfileInfo;
