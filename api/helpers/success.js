const endpointResponse = ({
    res,
    code,
    status = true,
    message,
    body,
    options,
  }) => {
    res.status(code).json({
      status,
      code,
      message,
      body,
      options,
    })
  }
  
  module.exports = {
    endpointResponse,
  }
  