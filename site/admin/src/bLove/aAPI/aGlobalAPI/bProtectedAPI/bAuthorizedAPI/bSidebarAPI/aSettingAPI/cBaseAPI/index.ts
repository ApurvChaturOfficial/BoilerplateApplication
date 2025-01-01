import apiConnection from "@/aConnection/cAPIConnection";


const baseAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    baseListAPI: builder.query({
      query: () => ({
        url: `base/list/`,
        method: "GET",
      }),
      providesTags: ["baseList"]
    }),

    baseCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/base/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["baseList"]
    }),

    baseRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/base/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "baseRetrieve", id: data.params._id }
      ]
    }),

    baseUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/base/update/${data.params.__id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "baseRetrieve", id: data.params._id }
      ]
    }),

    baseDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/base/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "baseRetrieve", id: data.params._id }
      ]
    })

  })
})

export default baseAPIEndpoint;
