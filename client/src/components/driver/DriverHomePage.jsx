import axios from "axios";
import React, { useEffect, useState } from "react";
import ViewMap from "../map/ViewMap";
import { toast } from "react-toastify";

const DriverHomePage = () => {
  const email = localStorage.getItem("data");
  const [showMap, setShowMap] = useState(false);
  const [data, setData] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selectedBinId, setSelectedBinId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/bin");
      setData(response.data.data);
    };
    fetchData();
  }, []);

  const filter_bin = data.filter((item) => item.driverEmail === email);

  useEffect(() => {
    if (filter_bin.length > 0) {
      const initialMarkers = filter_bin.map((item) => ({
        geocode: item.location[0].geocode,
        popup: item.binNumber,
      }));
      setMarkers(initialMarkers);
    }
  }, [filter_bin]);

  const updateStatus = async (binId, newStatus) => {
    try {
      await axios.patch(`http://localhost:3000/bin/update/${binId}`, {
        status: newStatus,
      });

      toast.success('Updated your status');
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="bg-green-200 min-h-screen p-4">
      <h1 className="font-bold text-2xl text-center underline mb-4">
        View Work Log
      </h1>

      {filter_bin.map((item) => (
        <div
          key={item.id}
          className="bg-green-200 border w-[60vw] mx-auto border-black rounded-lg shadow-md p-4 mb-4 md:p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <span className="font-bold">Bin Number:</span> {item.binNumber}
              </p>
              <p>
                <span className="font-bold">Cycle Period:</span>{" "}
                {item.cyclePeriod}
              </p>
              <p>
                <span className="font-bold">Driver Email:</span>{" "}
                {item.driverEmail}
              </p>
              <p>
                <span className="font-bold">Driver Name:</span>{" "}
                {item.driverName}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">ID:</span> {item.id}
              </p>
              <p>
                <span className="font-bold">Landmark:</span> {item.landMark}
              </p>
              <p>
                <span className="font-bold">Load Type:</span> {item.loadType}
              </p>
              <p>
                <span className="font-bold">Locality:</span> {item.locality}
              </p>
              <p>
                <span className="font-bold">Village:</span> {item.village}
              </p>
              <p>
                <span className="font-bold">Status:</span> <select
              
                onChange={(e) => updateStatus(item.id, e.target.value)}
              >
                <option value="pending">
                  Pending
                </option>
                <option
                  value="completed"
                
                >
                  Completed
                </option>
                <option
                  value="in-progress"
                  
                >
                  In Progress
                </option>
              </select>
              </p>
              {/* Allow changing status */}
              
            </div>
          </div>
        </div>
      ))}

      {!showMap && (
        <p
          className="text-center font-bold text-black cursor-pointer underline"
          onClick={() => setShowMap(true)}
        >
          View Work Space
        </p>
      )}

      {showMap && (
        <div>
          <p
            className="text-center font-bold text-black cursor-pointer underline"
            onClick={() => setShowMap(false)}
          >
            Hide Work Space
          </p>
          <ViewMap marker={markers} />
        </div>
      )}
    </div>
  );
};

export default DriverHomePage;
