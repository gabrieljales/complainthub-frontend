import { UseMutateFunction } from '@tanstack/react-query';
import Complaint from '../../models/Complaint';
import {
  CreateComplaintRequest,
  UpdateComplaintRequest,
} from '../../interfaces/api/requests/Complaint';

/**
 * Propriedades do componente ComplaintModal.
 *
 * @typedef {Object} ComplaintModalProps
 *
 * @property {Complaint} [initialData] - Os dados iniciais da reclamação.
 * @property {boolean} isOpen - Se o modal está aberto.
 * @property {boolean} [isSaveButtonLoading] - Se o botão de salvar está carregando.
 * @property {() => void} onClose - A função a ser chamada quando o modal é fechado.
 * @property {UseMutateFunction<Complaint, Error, CreateComplaintRequest, unknown>} [onCreateComplaint] - A função a ser chamada quando uma nova reclamação é criada.
 * @property {UseMutateFunction<Complaint, Error, UpdateComplaintRequest, unknown>} [onUpdateComplaint] - A função a ser chamada quando uma reclamação existente é atualizada.
 */
export interface ComplaintModalProps {
  initialData?: Complaint;
  isSaveButtonLoading?: boolean;
  isOpen: boolean;
  onClose: () => void;
  onCreateComplaint?: UseMutateFunction<
    Complaint,
    Error,
    CreateComplaintRequest,
    unknown
  >;
  onUpdateComplaint?: UseMutateFunction<
    Complaint,
    Error,
    UpdateComplaintRequest,
    unknown
  >;
}
