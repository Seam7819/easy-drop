import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const generateTrackingID = () => {
  const date = new Date();
  const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `PCL-${datePart}-${rand}`;
};

const SendParcel = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();

  const serviceCenters = useLoaderData();
  const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];

  const getDistrictsByRegion = (region) =>
    serviceCenters.filter((w) => w.region === region).map((w) => w.district);

  const parcelType = watch("type");
  const senderRegion = watch("sender_region");
  const receiverRegion = watch("receiver_region");

  const onSubmit = (data) => {
    const weight = parseFloat(data.weight) || 0;
    const isSameDistrict = data.sender_center === data.receiver_center;

    let baseCost = 0;
    let extraCost = 0;
    let breakdown = "";

    if (data.type === "document") {
      baseCost = isSameDistrict ? 60 : 80;
      breakdown = `Document delivery ${isSameDistrict ? "within" : "outside"} the district.`;
    } else {
      if (weight <= 3) {
        baseCost = isSameDistrict ? 110 : 150;
        breakdown = `Non-document up to 3kg ${isSameDistrict ? "within" : "outside"} the district.`;
      } else {
        const extraKg = weight - 3;
        const perKgCharge = extraKg * 40;
        const districtExtra = isSameDistrict ? 0 : 40;
        baseCost = isSameDistrict ? 110 : 150;
        extraCost = perKgCharge + districtExtra;

        breakdown = `
          Non-document over 3kg ${isSameDistrict ? "within" : "outside"} the district.<br/>
          Extra charge: ৳40 x ${extraKg.toFixed(1)}kg = ৳${perKgCharge}<br/>
          ${districtExtra ? "+ ৳40 extra for outside district delivery" : ""}
        `;
      }
    }

    const totalCost = baseCost + extraCost;

    const tracking_id = generateTrackingID();

    Swal.fire({
      title: "Delivery Cost Breakdown",
      icon: "info",
      html: `
        <div class="text-left text-base space-y-2">
          <p><strong>Parcel Type:</strong> ${data.type}</p>
          <p><strong>Weight:</strong> ${weight} kg</p>
          <p><strong>Delivery Zone:</strong> ${isSameDistrict ? "Within Same District" : "Outside District"}</p>
          <hr class="my-2"/>
          <p><strong>Base Cost:</strong> ৳${baseCost}</p>
          ${extraCost > 0 ? `<p><strong>Extra Charges:</strong> ৳${extraCost}</p>` : ""}
          <div class="text-gray-500 text-sm">${breakdown}</div>
          <hr class="my-2"/>
          <p class="text-xl font-bold text-green-600">Total Cost: ৳${totalCost}</p>
          <p><strong>Tracking ID:</strong> ${tracking_id}</p>
        </div>
      `,
      showDenyButton: true,
      confirmButtonText: "💳 Confirm Parcel",
      denyButtonText: "✏️ Edit",
      confirmButtonColor: "#16a34a",
      denyButtonColor: "#d3d3d3",
      customClass: { popup: "rounded-xl shadow-md px-6 py-6" },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Parcel Created!",
          text: "You can now proceed to payment or track your parcel.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/"); //have to change later /dashboard/myParcels
      }
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Send a Parcel</h2>
          <p className="text-gray-500">Fill in the details below</p>
        </div>

        {/* Parcel Info */}
        <div className="border p-4 rounded-xl shadow-md space-y-4">
          <h3 className="font-semibold text-xl">Parcel Info</h3>
          <input {...register("title", { required: true })} className="input input-bordered w-full" placeholder="Parcel Name" />
          {errors.title && <p className="text-red-500 text-sm">Parcel name is required</p>}

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" value="document" {...register("type", { required: true })} className="radio" />
              Document
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="non-document" {...register("type", { required: true })} className="radio" />
              Non-Document
            </label>
          </div>
          {errors.type && <p className="text-red-500 text-sm">Type is required</p>}

          <input
            type="number"
            step="0.1"
            {...register("weight")}
            disabled={parcelType !== "non-document"}
            className={`input input-bordered w-full ${parcelType !== "non-document" ? "bg-gray-100 cursor-not-allowed" : ""}`}
            placeholder="Weight (kg)"
          />
        </div>

        {/* Sender & Receiver Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sender */}
          <div className="border p-4 rounded-xl shadow-md space-y-4">
            <h3 className="font-semibold text-xl">Sender Info</h3>
            <input {...register("sender_name", { required: true })} className="input input-bordered w-full" placeholder="Name" />
            <input {...register("sender_contact", { required: true })} className="input input-bordered w-full" placeholder="Contact" />
            <select {...register("sender_region", { required: true })} className="select select-bordered w-full">
              <option value="">Select Region</option>
              {uniqueRegions.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <select {...register("sender_center", { required: true })} className="select select-bordered w-full">
              <option value="">Select District</option>
              {getDistrictsByRegion(senderRegion).map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <input {...register("sender_address", { required: true })} className="input input-bordered w-full" placeholder="Address" />
            <textarea {...register("pickup_instruction")} className="textarea textarea-bordered w-full" placeholder="Pickup Instruction" />
          </div>

          {/* Receiver */}
          <div className="border p-4 rounded-xl shadow-md space-y-4">
            <h3 className="font-semibold text-xl">Receiver Info</h3>
            <input {...register("receiver_name", { required: true })} className="input input-bordered w-full" placeholder="Name" />
            <input {...register("receiver_contact", { required: true })} className="input input-bordered w-full" placeholder="Contact" />
            <select {...register("receiver_region", { required: true })} className="select select-bordered w-full">
              <option value="">Select Region</option>
              {uniqueRegions.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <select {...register("receiver_center", { required: true })} className="select select-bordered w-full">
              <option value="">Select District</option>
              {getDistrictsByRegion(receiverRegion).map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <input {...register("receiver_address", { required: true })} className="input input-bordered w-full" placeholder="Address" />
            <textarea {...register("delivery_instruction")} className="textarea textarea-bordered w-full" placeholder="Delivery Instruction" />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-accent w-full text-black mt-4">
          Proceed to Add Parcel
        </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
