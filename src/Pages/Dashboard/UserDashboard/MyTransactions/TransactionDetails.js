import React from 'react';

const TransactionDetails = ({trc}) => {
    console.log(trc);
    return (
    //     <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
    //     <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
    //         <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Date</span>
    //         {trc?.date}
    //     </td>
    //     <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
    //         <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Acc No</span>
    //         {trc?.senderAccount}
    //     </td>
    //     <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
    //         <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Statement</span>
    //         {trc?.statement}
    //     </td>
    //     <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
    //         <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Transaction</span>
    //         $ {(trc?.deposit > 0 && trc?.withdraw <= 0) ? trc?.deposit : null || (trc?.withdraw > 0 && trc?.deposit <= 0) ? trc?.withdraw : null }
    //     </td>
    // </tr>

    <tr key={trc?.AccNo}>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={(trc?.ahimage && trc?.ahimage) || (trc?.ahupimage && trc?.ahupimage) || (trc?.ahcpimage && trc?.ahcpimage)} alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold">{trc?.name}</div>
              <div class="text-sm opacity-50">{trc?.email}</div>
            </div>
          </div>
        </td>
        <td>
          <b>{trc?.date}</b>
          <br/>
          <span class="badge badge-ghost badge-sm">{trc?.date}</span>
        </td>
        <td>
        <b>$ {(trc?.deposit > 0 && trc?.withdraw <= 0) ? trc?.deposit : null || (trc?.withdraw > 0 && trc?.deposit <= 0) ? trc?.withdraw : null }</b>
        <br/>
          <span>{trc?.statement}</span>
          </td>
        <th>
          <button class="btn btn-md hover:bg-slate-200 hover:border-none normal-case text-black font-normal px-10 rounded-2xl bg-slate-100 border-inherit">gdfh</button>
        </th>
      </tr>
    );
};

export default TransactionDetails;