
export const HTTP_STATUS = {
  // 1xx Informational
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,

  // 2xx Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,

  // 3xx Redirection
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,

  // 4xx Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  // 5xx Server Errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
};

// 2. Human-Readable Descriptions Lookup
const STATUS_MESSAGES = {
  [HTTP_STATUS.OK]: "The request completed successfully.",
  [HTTP_STATUS.CREATED]: "The resource was successfully created.",
  [HTTP_STATUS.NO_CONTENT]: "Action completed successfully, no content returned.",
  [HTTP_STATUS.BAD_REQUEST]: "The request contains invalid data or syntax error.",
  [HTTP_STATUS.UNAUTHORIZED]: "Authentication credentials are missing or invalid.",
  [HTTP_STATUS.FORBIDDEN]: "You do not have permission to access this resource.",
  [HTTP_STATUS.NOT_FOUND]: "The requested resource could not be found.",
  [HTTP_STATUS.CONFLICT]: "The request conflicts with the current state of the server.",
  [HTTP_STATUS.TOO_MANY_REQUESTS]: "Rate limit exceeded. Please try again later.",
  [HTTP_STATUS.INTERNAL_SERVER_ERROR]: "An unexpected error occurred on our server.",
  [HTTP_STATUS.SERVICE_UNAVAILABLE]: "The server is temporarily down for maintenance.",
};

// 3. Helper Functions

/**
 * Gets a friendly description message for a given status code.
 * Falls back to generic message if code is not explicitly documented.
 * @param {number} code - The HTTP status code
 * @returns {string}
 */
export function getStatusMessage(code) {
  if (STATUS_MESSAGES[code]) return STATUS_MESSAGES[code];
  
  if (isInformational(code)) return "Informational status code.";
  if (isSuccess(code)) return "Successful operation.";
  if (isRedirection(code)) return "Further action needed to complete the request.";
  if (isClientError(code)) return "Client side error.";
  if (isServerError(code)) return "Server side error.";
  
  return "Unknown HTTP Status Code.";
}

/**
 * Type Checkers
 */
export const isInformational = (code) => code >= 100 && code < 200;
export const isSuccess = (code) => code >= 200 && code < 300;
export const isRedirection = (code) => code >= 300 && code < 400;
export const isClientError = (code) => code >= 400 && code < 500;
export const isServerError = (code) => code >= 500 && code < 600;
export const isError = (code) => code >= 400 && code < 600;
